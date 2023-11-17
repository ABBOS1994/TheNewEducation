import React from 'react';
import NextIcon from '../../assets/Icons/Icons';
import { Link } from 'react-scroll';

function OverviewMainTwoBottomLeftOnclick() {
  return (
    <div
      className='ml-4 w-11/12 rounded-3xl bg-germain md:ml-8 lg:ml-0 lg:w-[475px] xl:w-1/2'
      data-aos='fade-right'
    >
      <h1 className='ml-8 pt-10 text-2xl text-black xl:ml-0 xl:w-8/12 xl:px-10 xl:text-3xl'>
        Work and Travel in Germany
      </h1>

      <div className=' ml-8 mt-7 xl:ml-10'>
        <p className='pt-2 text-black xl:w-8/12'>
          Biz bilan Yevropa bo’ylab sayohat qilish Yevropa Shengen vizasini
          qo’lga kiritish uchun ajoyib imkoniyat!
        </p>
      </div>

      <div className=' ml-8 mt-7 xl:ml-10'>
        <p className='pt-2 text-black xl:w-8/12'>
          Work and Travel dasturi bu – Germaniyada xalqaro talabalarning yozgi
          ta’tilda bandligini ta’minlash, yozni behuda o’tkazmasdan ishab
          daromad topish, butun Yevropa bo’ylab sayohat qilish imkonini beruvchi
          ajoyib dastur!
        </p>
      </div>

      <div className=' ml-8 mt-7 xl:ml-10'>
        <p className='pt-2 text-black xl:w-8/12'>
          Germaniya madaniyati bilan tanishishi uchun tashkil etilgan, faqatgina
          talabalar qatnasha oladigan maxsus dastur hisoblanadi.
        </p>
      </div>

      <div className=' ml-8 mt-7 xl:ml-10'>
        <p className='pt-2 text-black xl:w-8/12'>
          Work and Travel dasturida Bakalavr bosqichining 1-2-3… bosqich
          talabalari (bitiruvchi kurslardan tashqari), shuningdek, magistratura
          1-bosqich talabalari qatnashishi mumkin.
        </p>
      </div>

      <Link to='footer' duration={5000}>
        <div
          className='mx-10 mt-14 flex h-16 w-10/12  cursor-pointer items-center justify-center rounded-full bg-white lg:mt-40
         xl:mt-20'
        >
          <p className='mr-3 flex items-center text-base tracking-widest text-black text-black'>
            Kursga yozilish
          </p>
          <div className='rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent'>
            <NextIcon />
          </div>
        </div>
        <h1 className='mt-8 text-transparent'>Kursga yozilish</h1>
      </Link>
    </div>
  );
}

export default OverviewMainTwoBottomLeftOnclick;
