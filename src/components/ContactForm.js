import React, { useState } from 'react';
import { FooterIcon } from '../assets/Icons/Icons';
import { InputField } from './InputField';
import { prop } from 'ramda';
import { useForm } from 'react-hook-form';
import moment from 'moment/moment';
import axios from 'axios';
import { Notification } from './Notification';

function ContactForm() {
  const [state, setState] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  function onSubmit(value) {
    const dataSheet = {
      date: `${moment().format('LTS L').toString()}`,
      name: prop('name', value),
      number: prop('number', value),
      message: prop('message', value),
    };
    axios
      .post('https://sheetdb.io/api/v1/xoqc14bbptwcy', dataSheet)
      .then((response) => {
        if (response.status == 201 || response.status == 200) {
          setState(true);
        } else {
          console.log(response);
        }
      });
    reset();
  }
  return (
    <div className='flex w-full flex-col items-center justify-center'>
      <Notification open={state} close={() => setState(false)} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-20 flex flex-col items-center items-center justify-center'
        method='POST'
        id='sheetdb-form'
      >
        <div className='-mt-16 mr-[550px] hidden xl:block'>
          <FooterIcon />
        </div>
        <InputField
          rest
          register={register}
          control={control}
          rules={{ required: true }}
          error={prop('name', errors)}
          name='name'
          placeholder='Ismingiz'
        />

        <InputField
          register={register}
          control={control}
          rules={{ required: true }}
          error={prop('phone_number', errors)}
          name='number'
          className='text-secondary mt-4 h-11 w-full rounded-full pl-6  '
          placeholder='Telefon raqamingiz'
        />
        <textarea
          name='message'
          {...register('message')}
          className='border-colorRounded/40 bg-message-bg placeholder:text-placeholder-color text-secondary mt-3 h-52 w-[345px] rounded-xl border bg-white px-5
                py-3 text-black md:w-[610px] lg:w-[450px] 2xl:w-full'
          placeholder='Xabaringizni shu yerga yozing...'
          required
        />
        <button
          className='mt-8 h-16 w-10/12 rounded-full  bg-gradient-to-r from-gradientStart to-gradientFinish text-base
            tracking-wide text-white md:w-8/12 xl:h-12 xl:w-7/12 xl:rounded-3xl'
          onClick={handleSubmit(onSubmit)}
        >
          Xabarni yuborish
        </button>
      </form>
      <Notification open={state} close={() => setState(false)} />
    </div>
  );
}

export default ContactForm;
