import React from 'react';
import korea from '../../public/images/images_gif/korea.gif';
import University from '../../public/images/image 15 (1).png';
import Image from 'next/image';
import OverviewMainTwoBottom from './OverviewMainTwo/OverviewMainTwoBottom';
import { SunIcon } from '../assets/Icons/Icons';

function OverviewMainTwo() {
  return (
    <div id='study' className='overflow-hidden bg-white'>
      <div className='container m-auto mt-32 flex w-full xl:mt-48'>
        <h1 className='ml-10 mt-20 text-xl font-bold tracking-tight text-black md:mt-32 lg:w-1/4'>
          02.
        </h1>
        <div className='ml-12 xl:ml-6'>
          <div className='flex'>
            <h1
              className='bg-gradient-to-r from-black to-gradient-text bg-clip-text py-2 text-center text-5xl font-bold
           tracking-tight text-black text-transparent sm:ml-8 md:text-7xl'
            >
              Xorijda
            </h1>
            <div className='ml-4 lg:ml-10'>
              <SunIcon />
            </div>
          </div>
          <div className='flex'>
            <div className=' -ml-4 h-12 w-20 sm:ml-0 md:mt-2 md:h-auto md:w-auto'>
              <Image
                src={korea}
                width={121}
                height={72}
                alt='#'
                className='rounded-xl object-contain md:rounded-3xl'
              />
            </div>
            <h1
              className='ml-2.5 bg-gradient-to-r from-black to-gradient-text bg-clip-text pb-20 text-center text-5xl font-bold
           tracking-tight text-black text-transparent md:ml-5 md:text-7xl'
            >
              o’qish
            </h1>
          </div>
        </div>
      </div>

      <div className='container m-auto w-full'>
        <div className='mx-5 mt-8 xl:mt-20'>
          <Image
            className='rounded-2xl'
            src={University}
            width={1600}
            height={676}
            alt='#'
            data-aos='flip-down'
          />
        </div>
      </div>

      <OverviewMainTwoBottom />
    </div>
  );
}

export default OverviewMainTwo;
