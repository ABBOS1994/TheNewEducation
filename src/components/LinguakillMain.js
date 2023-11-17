import React from 'react';
import Image from 'next/image';
import Programmer from '../../public/images/image 21.png';
import skill from '../../public/images/Linguaskill.png';
import NextIcon from '../assets/Icons/Icons';
import Link from 'next/link';

function LinguakillMain() {
  return (
    <div className='pt-36 md:pt-60'>
      <div className='container m-auto flex w-full flex-col items-center'>
        <h1
          className='-ml-16 w-9/12 bg-gradient-to-r from-black to-gradient-text
        bg-clip-text py-1 py-2 text-center text-start text-3xl font-bold tracking-tight
        text-transparent xl:ml-20 xl:ml-28 xl:w-7/12 xl:text-5xl 2xl:ml-16'
        >
          Linguaskillga Ingliz tili testi bilan tez natijalar
        </h1>
        <p className=' -ml-[200px] mt-5 text-sm text-light-black md:-ml-[470px] lg:-ml-[670px] xl:-ml-[470px] 2xl:-ml-[670px]'>
          12 Noy 2022 • Yangiliklar
        </p>
        <div className='mx-10 mt-8 flex md:mx-[80px] xl:mx-[345px]'>
          <div>
            <Image src={Programmer} width={387} height={278} alt='#' />
          </div>
          <div className='ml-10'>
            <Image src={skill} width={387} height={278} alt='#' />
          </div>
        </div>
        <div className='xl:w-11/12'>
          <div className='ml-10 bg-white xl:ml-72'>
            <p className='mr-24 w-11/12 pt-16 text-black md:ml-10 lg:ml-14 lg:w-full xl:mx-0 xl:ml-0'>
              Linguaskill imtihoni Cambridge Assessment English tomonidan
              tashkil qilinadigan onlayn imtihon turi bo’lib, asosan ta’lim
              institutlari tomonidan talabalarni baholash, til bilish
              darajalarini aniqlash, ish beruvchilar uchun hodimlarining til
              bilish darajasini aniqlash maqsadlarida tashkil qilinadi. Ushbu
              imtihon jami 4ta ko’nikma 3ta modulda o’tkaziladi:
            </p>
            <p className='mr-24 w-11/12 pt-10 text-black md:ml-10 lg:ml-14 lg:w-full xl:mx-0 xl:ml-0'>
              Reading and Listening Speaking Writing Boshqa imtihonlardan farqi
              imtihon to’liq kompyuterda topshiriladi. Test natijalari 48 soat
              ichida ma’lum bo’ladi. Natijalarni baholash CEFR bo’yicha bo’ladi
              va quyidagi ballar uchun quyidagi darajalar beriladi: 100-119 = A1
              (Beginner) daraja 120-139 = A2 (Elementary) daraja. 140 -159 = B1
              (Pre-Intermediate – Intermediate) daraja. 160 -179 = B2
              (Upper-Intermediate) daraja. 180 + = C1 (Advanced) darajaga
              to’g’ri keladi.
            </p>
            <p className='mr-24 w-11/12 pt-10 text-black md:ml-10 lg:ml-14 lg:w-full xl:mx-0 xl:ml-0'>
              Sertifikat amal qilish muddati 2 yil. Imtihondan C1 darajasi
              olinganda ingliz tili o’qituvchilari oyligiga 50 foiz ustama
              to’lanishi belgilangan.
            </p>
            <p className='mr-24 w-11/12 pt-10 text-black md:ml-10 lg:ml-14 lg:w-full xl:mx-0 xl:ml-0'>
              Linguaskill sizga qanday yordam berishi haqida ko’proq ma’lumot
              olish uchun biz bilan aloqaga chiqing.
            </p>

            <Link href='https://www.cambridgeenglish.org/exams-and-tests/linguaskill/find-a-centre/'>
              <div
                className='mx-10 mt-20 flex h-16 w-9/12 cursor-pointer items-center justify-center
                rounded-full bg-gradient-to-r from-gradientStart to-gradientFinish lg:mt-40 xl:mt-24'
              >
                <p className='mr-3 flex items-center text-base tracking-widest text-black text-white '>
                  Batafsil malumot olish uchun
                </p>
                <div className='rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent'>
                  <NextIcon />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinguakillMain;
