import React, { useState } from 'react';
import { InputField } from './InputField';
import { prop } from 'ramda';
import { useForm } from 'react-hook-form';
import moment from 'moment/moment';
import axios from 'axios';
import { Notification } from './Notification';

function ContactFormNavbar() {
  const [state, setState] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(value) {
    axios
      .post(`/api/sendMessage`, {
        name: prop('name', value),
        phone: prop('number', value),
        message: prop('message', value),
      })
      .then((r) => {
        setState(true);
        return r;
      })
      .catch(e => {
        setState(false);
        console.log(e.message);
        return e;
      });
    reset();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mt-10 flex flex-col items-center justify-center '
      >
        <div className='ml-4 md:ml-8 lg:flex xl:ml-0 2xl:w-11/12'>
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
            error={prop('number', errors)}
            name='number'
            className='text-secondary mt-4 h-11 w-full rounded-full pl-6  '
            placeholder='Telefon raqamingiz'
          />
        </div>
        <textarea
          name='message'
          {...register('message')}
          className='border-colorRounded/40 bg-message-bg placeholder:text-placeholder-color text-secondary ml-6 mt-3 h-52 w-[345px] rounded-3xl border bg-white px-5 py-3 text-black md:-ml-10
          md:w-[630px] lg:ml-6 lg:ml-8 lg:w-[900px] xl:ml-0 xl:w-[900px]
           xl:rounded-lg 2xl:ml-4 2xl:w-11/12'
          placeholder='Qanday savollaringiz bor, yerga yozing...'
          required
        />

        <button
          className='ml-4 mt-8 h-16 w-11/12 w-[320px] rounded-full bg-gradient-to-r from-gradientStart to-gradientFinish md:ml-0 md:w-5/12
            xl:h-12 xl:w-5/12 xl:rounded-3xl'
          onClick={handleSubmit(onSubmit)}
        >
          <p className='text-base tracking-wide text-white'>
            Kurs uchun arizani yuborish
          </p>
        </button>
      </form>
      <Notification open={state} close={() => setState(false)}/>
    </div>
  );
}

export default ContactFormNavbar;
