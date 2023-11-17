import React from 'react';
import NextIcon from '../../assets/Icons/Icons';
import { Link } from 'react-scroll/modules';

function OverviewChildCenter() {
  return (
    <div className='mx-5'>
      <div
        className='container m-auto mt-10 w-full rounded-3xl bg-germain px-5'
        data-aos='flip-up'
      >
        <div className='pb-5'>
          <h1 className='pl-5 pt-10 text-2xl text-black md:text-3xl xl:text-5xl'>
            Nega aynan <br />
            Biz?
          </h1>

          <div className='w-full xl:flex'>
            <div className='xl:w-2/3'>
              <p className='w-full pl-5 pt-14 text-base text-black xl:w-8/12 xl:text-xl'>
                English Campus o’quv markazi tashkil etilgan bolalar kurslari
                orqali farzandlarimiz, nafaqat yuqoridagi yo’nalishlar boʻyicha
                bilim ko’nikmalarga ega bo’ladi, balki Muomala madaniyati, Dunyo
                qarashining kengayishi va tengdoshlariga nisbatan ma’lumotlarni
                oson qabul qilish qobiliyatlarini shakllantiradi.
              </p>
            </div>
            <div className='mx-5 xl:w-3/5'>
              <p className='w-full pt-5 text-base text-black xl:w-6/12 xl:pt-14 xl:text-xl'>
                Bizdagi malakali mutaxassislar esa farzandingiz tarbiyali,
                odobli, aqlli inson bo’lib yetishishlari uchun o’zlaridagi bor
                imkoniyatni ishga soladilar!
              </p>
            </div>
          </div>
          <Link to='footer' duration={5000}>
            <div
              className='mx-10 my-10 flex h-16  w-10/12  items-center justify-center rounded-full
            bg-white xl:mt-40 xl:w-11/12'
            >
              <p
                className='mr-3 flex items-center text-base
              tracking-widest text-black'
              >
                Kursga yozilish
              </p>
              <div
                className='rounded-full bg-red bg-gradient-to-r from-red
              to-gradientFinish text-transparent'
              >
                <NextIcon />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OverviewChildCenter;
