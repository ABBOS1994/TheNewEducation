import React from 'react';
import Usa from '/public/images/usa.png';
import Rus from '/public/images/rusflag.png';
import Sign from '/public/images/signature.png';
import Math from '/public/images/math.png';
import Flower from '/public/images/flower.png';
import Scissors from '/public/images/scissors.png';
import LittleGirl from '/public/images/littleGirl.png';
import Image from 'next/image';
import NextIcon, { GirlIcon } from '../../assets/Icons/Icons';
import { Link } from 'react-scroll/modules';

function OverviewChildTop() {
  return (
    <div className='container m-auto mt-8 w-full xl:mt-20 xl:flex'>
      <div
        className='mx-5 rounded-3xl bg-germain pb-5 xl:mx-0 xl:w-1/2'
        data-aos='flip-left'
      >
        <h1 className='pl-10 pt-10 text-2xl text-black md:text-3xl xl:text-5xl'>
          Bolalar kurslari
        </h1>
        <p className='pl-10 pt-2 text-base text-black md:text-lg xl:text-xl'>
          Tanishish menyusi
        </p>

        <div className='mt-14 md:flex'>
          <div className='ml-10 w-full xl:w-1/2 2xl:mt-12'>
            <div className='flex'>
              <div className='mt-1 h-5 w-5 md:h-auto md:w-auto'>
                <Image
                  width={35}
                  height={35}
                  src={Usa}
                  alt='#'
                  className='object-contain'
                />
              </div>
              <h1 className='pl-3 pt-0.5 text-base text-black md:text-lg xl:text-xl'>
                Ingliz tili
              </h1>
            </div>
            <div className='mt-4 flex xl:mt-5'>
              <div className='mt-1 h-5 w-5 md:h-auto md:w-auto'>
                <Image width={35} height={35} src={Rus} alt='' />
              </div>
              <h1 className='pl-3 pt-0.5 text-base text-black md:text-lg xl:text-xl'>
                Rus tili
              </h1>
            </div>
            <div className='mt-4 flex xl:mt-5'>
              <div className='mt-1 h-5 w-5 md:h-auto md:w-auto'>
                <Image width={35} height={35} src={Sign} alt='' />
              </div>
              <h1 className='pl-3 pt-0.5 text-base text-black md:text-lg xl:text-xl'>
                Husnixat
              </h1>
            </div>
          </div>
          <div className='ml-10 w-full xl:ml-36 xl:w-10/12 2xl:mt-12'>
            <div className='mt-4 flex md:mt-0 xl:mt-0'>
              <div className='mt-1 h-5 w-5 md:h-auto md:w-auto'>
                <Image width={35} height={35} src={Math} alt='' />
              </div>
              <h1 className='pl-3 pt-0.5 text-base text-black md:text-lg xl:text-xl'>
                Matematika
              </h1>
            </div>
            <div className='mt-4 flex xl:mt-5'>
              <div className='mt-1 h-5 w-5 md:h-auto md:w-auto'>
                <Image width={35} height={35} src={Flower} alt='' />
              </div>
              <h1 className='pl-3 pt-0.5 text-base text-black md:text-lg xl:text-xl'>
                Etika-estetika
              </h1>
            </div>
            <div className='flex pt-5'>
              <div className='mt-1 h-5 w-5 md:h-auto md:w-auto'>
                <Image width={35} height={35} src={Scissors} alt='' />
              </div>
              <h1 className='pl-3 pt-0.5 text-base text-black md:text-lg xl:text-xl'>
                Mehnat darslari
              </h1>
            </div>
          </div>
        </div>

        <Link to='footer' duration={5000}>
          <div className='mx-10 my-4 mt-10 flex h-16  w-10/12 items-center justify-center rounded-full bg-white xl:mt-40'>
            <p className='mr-3 flex items-center text-base tracking-widest text-black text-black'>
              Kursga yozilish
            </p>
            <div className=' rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent'>
              <NextIcon />
            </div>
          </div>
        </Link>
      </div>
      <div
        className='mt-5 w-full rounded-3xl px-5 xl:relative xl:mt-0 xl:w-1/2'
        data-aos='flip-right'
      >
        <Image
          className='z-10 rounded-3xl  object-cover xl:relative'
          src={LittleGirl}
          alt=''
        />
        <div className='absolute -top-32 right-10 z-20 hidden xl:block'>
          <GirlIcon />
        </div>
      </div>
    </div>
  );
}

export default OverviewChildTop;
