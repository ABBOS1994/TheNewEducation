import React from 'react';
import NextIcon from '../../assets/Icons/Icons';
import { Link } from 'react-scroll';

function OverviewMainTwoBottomRightOnclick() {
  return (
    <div className='ml-4 mt-4 h-auto w-11/12 rounded-3xl md:ml-8 lg:ml-4 lg:mt-0 lg:w-[480px] xl:w-1/2'>
      <div
        className='rounded-3xl bg-germain md:-mt-4 lg:mt-0 xl:mt-0'
        data-aos='fade-down-left'
      >
        <h1 className='pl-8 pt-10 text-3xl text-black xl:w-7/12 xl:pl-14'>
          Dastur davomiyligi
        </h1>

        <div className='ml-8 mt-5 mt-7 xl:ml-11'>
          <p className='w-10/12 pl-3 text-base text-black xl:w-7/12'>
            Dastur davomiyligi 90 kunni (3 oy) ni tashkil etadi. Ish boshlanish
            vaqti taklif qilinayotgan ish turi va sharoitiga qarab Iyun oyining
            15 sanasidan boshlanib 15-Sentyabrgacha davom etadi.
          </p>
        </div>

        <div className='ml-8 mt-5 mt-7 xl:ml-11'>
          <p className='w-10/12 pl-3 text-base text-black xl:w-7/12'>
            English Campus orqali Work and Travel dasturida qatnashing va
            Yevropaga Shengen vizasini qo’lga kiritib yozgi ta’tilingizni
            maroqli va foydali o’tkazing. Biz sizga barcha Hujjatlarni
            tayorlashda yordam beramz!
          </p>
        </div>

        <div className='ml-8 mt-5 mt-7 xl:ml-11'>
          <h1 className='w-10/12 pl-3 text-xl text-black xl:w-7/12'>
            (Xizmatlar shartnoma asosida!)
          </h1>
        </div>

        <Link to='footer' duration={5000}>
          <div
            className='mx-10 mb-8 mt-20 flex h-16 w-10/12 cursor-pointer  items-center justify-center rounded-full bg-white md:mt-36 lg:mt-60
            2xl:mt-44'
          >
            <p
              className='mr-3 flex items-center text-base tracking-widest text-black
              text-black'
            >
              Kursga yozilish
            </p>
            <div
              className=' rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish
              text-transparent'
            >
              <NextIcon />
            </div>
          </div>
        </Link>
        <h1 className='pt-3 text-germain'>Ko’proq malumot olish</h1>
      </div>
    </div>
  );
}

export default OverviewMainTwoBottomRightOnclick;
