import React from 'react';
import { Chiziq, KubIcon } from '../assets/Icons/Icons';
import Image from 'next/image';
import girl from '../../public/images/girl.png';
function OverviewGirl() {
  return (
    <div className='overflow-x-hidden bg-white'>
      <div
        className=' container m-auto mt-10 flex w-full justify-evenly lg:mt-48'
        id='about'
      >
        <div className=' m-auto w-full flex-wrap justify-evenly lg:flex'>
          <div className='mt-0 w-full lg:mt-10 lg:w-1/2 2xl:w-3/5'>
            <div
              className='flex flex-row  items-center gap-10'
              data-aos='fade-right'
            >
              <div className='ml-8 lg:ml-0'>
                <KubIcon />
              </div>
              <h1
                className='w-8/12 items-center bg-gradient-to-r from-black to-gradient-text bg-clip-text text-3xl font-bold
              tracking-tight text-transparent md:text-3xl lg:w-9/12 xl:w-10/12 xl:text-5xl 2xl:w-8/12'
              >
                Koreya davlati bo’yicha TOP universitetlarda tahsil olish imkoni
              </h1>
            </div>
            <div
              className='my-8 flex flex-row items-center gap-10'
              data-aos='fade-left'
            >
              <div className='ml-8 lg:ml-0'>
                <KubIcon />
              </div>
              <h1
                className='w-8/12 items-center bg-gradient-to-r from-black to-gradient-text bg-clip-text py-2 text-3xl font-bold
              tracking-tight text-transparent md:text-4xl lg:w-9/12 xl:text-5xl 2xl:w-8/12'
              >
                Intensiv kurslar orqali xorijiy tillarni, tez va sifatli
                o’rganish
              </h1>
            </div>
            <div
              className='flex flex-row items-center gap-10'
              data-aos='fade-right'
            >
              <div className='ml-8 lg:ml-0'>
                <KubIcon />
              </div>
              <h1
                className='w-8/12 items-center bg-gradient-to-r from-black to-gradient-text bg-clip-text py-2 text-3xl font-bold
              tracking-tight text-transparent md:text-4xl lg:w-9/12 xl:text-5xl 2xl:w-8/12'
              >
                Farzandlar kelajagi uchun, harakatni bugundan boshlash
              </h1>
            </div>
          </div>

          <div
            className='mx-9 mt-8 md:ml-24 lg:mx-0 lg:ml-0 lg:mt-0 lg:w-1/2 2xl:w-2/5'
            data-aos='zoom-in'
          >
            <Image
              src={girl}
              width={590}
              height={590}
              alt='#'
              className='rounded-2xl'
            />
          </div>
        </div>
      </div>

      <div className='container m-auto mt-32 lg:mt-52'>
        <h1
          className='mx-9 w-10/12 items-center bg-gradient-to-r from-black to-gradient-text bg-clip-text py-2 text-3xl font-bold
        tracking-tight text-transparent md:w-11/12 md:text-5xl lg:mx-0 xl:w-9/12'
          data-aos='fade-up'
        >
          English Campus o’quv markazi, o’zidagi bir-necha yillik tajribasi va
          1000 dan ortiq kelajakdagi yo’lini qidirayotgan yosh yigit-qizlarga
          o’z yordamini berishga ulgurdi.
        </h1>
        <div className='mt-16 flex justify-between md:mx-8 lg:mt-24 2xl:mx-0'>
          <div className='mt-20 hidden md:block' data-aos='fade-right'>
            <Chiziq />
          </div>
          <p
            className='ml-10 w-10/12 text-xl font-normal  tracking-widest text-black md:w-7/12 lg:w-1/2 xl:ml-0 xl:mr-96 xl:w-1/3'
            data-aos='fade-left'
          >
            O’z kasbining haqiqiy mutaxassislari orqali tashkillashtirilgan. Biz
            uchun har bir o’quvchimizning alohida qadri va o’rni bor. Bizning
            shior esa Bir maqsad yo’lida, birgalikda harakat qilish!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OverviewGirl;
