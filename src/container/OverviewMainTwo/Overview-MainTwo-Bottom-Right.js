import React from 'react';
import NextIcon, { Galochka, Undov } from '../../assets/Icons/Icons';
import { Link } from 'react-scroll/modules';

function OverviewMainTwoBottomRight() {
  return (
    <div className='ml-4 mt-4 h-auto w-11/12 rounded-3xl md:ml-8 lg:ml-4 lg:mt-0 lg:w-[480px] xl:w-1/2'>
      <div
        className='rounded-3xl bg-germain md:mt-4 lg:mt-0 xl:mt-0'
        data-aos='fade-down-left'
      >
        <h1 className='pl-8 pt-10 text-3xl text-black xl:w-7/12 xl:pl-14'>
          Grantlar eng yaxshi talabalarga beriladi
        </h1>
        <div className='ml-8 mt-6 flex xl:ml-14'>
          <div className='mt-1'>
            {' '}
            <Undov />{' '}
          </div>
          <p className='pl-3 text-base text-black'>100% o’qish tolovi</p>
        </div>
        <div className='ml-8 mt-5 flex xl:ml-14'>
          <div className='mt-1'>
            {' '}
            <Undov />{' '}
          </div>
          <p className='pl-3 text-base text-black'>100% yotoqxona to’lovi</p>
        </div>
        <div className='ml-8 mt-12 flex xl:ml-14'>
          <div className='mt-1'>
            {' '}
            <Galochka />{' '}
          </div>
          <p className='pl-3 text-base text-black'>
            Xalqaro talabalar uchun stipendiyalar
          </p>
        </div>
        <div className='ml-8 mt-5 flex xl:ml-14'>
          <div className='mt-1'>
            {' '}
            <Galochka />{' '}
          </div>
          <p className='w-10/12 pl-3 text-base text-black xl:w-7/12'>
            TOPIK 3 va undan yuqori darajaga ega bo’lganlar uchun (imtihon
            (Politexnika universitetiga abituriyentlar uchun - 2-bosqich)
            Transfer talabalari uchun istisno.
          </p>
        </div>

        <Link to='footer' duration={5000}>
          <div
            className='mx-10 mb-8 mt-20 flex  h-16 w-10/12 cursor-pointer items-center justify-center rounded-full
            bg-white'
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

      <div
        className='mt-4 h-full rounded-3xl bg-germain'
        data-aos='fade-up-left'
      >
        <h1 className='pl-8 pt-12 text-3xl text-black xl:w-7/12 xl:pl-14'>
          Bakalavr bosqichiga qabul qilish mezonlari
        </h1>
        <div className='mt-8 flex pl-8 xl:pl-14'>
          <div className='mt-1'>
            {' '}
            <Undov />{' '}
          </div>
          <p className='pl-3 text-base text-black'>
            Talaba va uning ota-onasi chet ellik bo’lishi kerak
          </p>
        </div>
        <div className='mt-8 flex pl-8 xl:pl-14'>
          <div className='mt-1'>
            {' '}
            <Undov />{' '}
          </div>
          <p className='w-4/6 pl-3 text-base text-black'>
            Talaba 12 yillik ta’limni tamomlashi kerak (maktab - 9 yil, kollej
            yoki litsey - 3 yil)
          </p>
        </div>
        <div className='mt-8 flex pl-8 xl:pl-14'>
          <div className='mt-1'>
            {' '}
            <Undov />{' '}
          </div>
          <p className=' pl-3 text-base text-black'>
            Topik 3 yoki undan yuqori darajaga ega bo’lishi kerak
          </p>
        </div>
        <div className='mt-12 flex w-full pl-8 xl:pl-14'>
          <div className='mt-1'>
            {' '}
            <Galochka />{' '}
          </div>
          <p className='w-11/12 pl-3 text-base text-black xl:w-8/12'>
            Fakultetlar Gumanitar fanlar universiteti Ingliz tili fakulteti
            Xitoy tili fakulteti Global erkin fanlar fakulteti Koreya madaniy
            mazmuni
            <br className='hidden xl:block' /> fakulteti Global menejment
            universiteti Hayot fanlari universiteti Tibbiyot muhandisligi
            fakulteti Ommaviy kommunikatsiyalar fakulteti Jamoat salomatligi
            fakulteti Media kommunikatsiyalar
            <br className='hidden xl:block' /> fakulteti Aktyorlik va raqs
            fakulteti Kino va animatsiya fakulteti Elektron tijorat fakulteti
            Politexnika universiteti Tibbiyot IT
            <br className='hidden xl:block' /> muhandisligi fakulteti
            Materiallar muhandisligi fakulteti raqamli animatsiya Internet
            tadqiqotlari fakulteti Aqlli avtomobillar
            <br className='hidden xl:block' /> fakulteti Energetika tizimlari
            fakulteti Ijro sanati fakulteti Tibbiyot muhandisligi fakulteti
            Arxitektura fakulteti (5 yil) Sog’liqni saqlash
            <br className='hidden xl:block' /> va biotexnologiya fakulteti
            Yoshlar ta’limi konsalting fakulteti Ijtimoiy ta’minot fakulteti
          </p>
        </div>

        <Link to='footer' duration={5000}>
          <div
            className='mx-10 mt-20 flex h-16 w-10/12 cursor-pointer items-center justify-center rounded-full bg-white xl:mt-48
          2xl:mt-24'
          >
            <p className='mr-3 flex items-center text-base tracking-widest text-black text-black'>
              Kursga yozilish
            </p>
            <div
              className=' rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent'
              id='child-courses'
            >
              <NextIcon />
            </div>
          </div>
        </Link>
        <h1 className='mt-10 text-transparent'>Kursga yozilish</h1>
      </div>
    </div>
  );
}

export default OverviewMainTwoBottomRight;
