import React from 'react';
import Image from 'next/image';

import Vengriya from '../../public/images/Vengriya.png';

function VengriyaMain() {
  return (
    <div className='bg-white pt-36 md:pt-60'>
      <div className='container m-auto flex w-full flex-col items-center'>
        <h1
          className='-ml-16 w-9/12 bg-gradient-to-r from-black to-gradient-text bg-clip-text py-1 py-2 text-center text-start text-3xl
        font-bold tracking-tight text-transparent lg:ml-12 xl:-ml-24 xl:ml-20 xl:w-7/12 xl:text-5xl 2xl:ml-44'
        >
          Vengriyada talim olish imkoniyati
        </h1>
        <p className='-ml-[200px] mt-5 text-sm text-light-black sm:-ml-96 md:-ml-[470px] lg:-ml-[550px] xl:-ml-[670px] 2xl:-ml-[550px]'>
          12 Noy 2022 • Yangiliklar
        </p>
        <div className='mx-5 mt-8 flex xl:-ml-32 2xl:ml-0'>
          <Image src={Vengriya} alt='#' width={700} className='rounded-2xl' />
        </div>
        <div className='xl:w-11/12'>
          <div className='ml-5 bg-white xl:ml-40 2xl:ml-[340px]'>
            <p className='w-11/12 px-1 pt-16 text-black md:ml-10 lg:ml-2 lg:w-full xl:mx-0 xl:ml-0 2xl:mr-24'>
              Yevropada bepul ta’lim! <br />
              Hech bir yosh bo’lmasa kerak Yevropada ta’lim olishni va u yerda
              o’z hayotini o’zgartirishni istaydigan.
              <br className='hidden lg:block' />
              English Campus sizlarga Yevropaning Vengriya davlatida bepul
              ta’lim olish imkoniyatini taqdim etadi. <br />
              Endi Yevropda ta’lim olish muammo emas. <br />
            </p>
            <p className='px-1 pt-10 text-black md:ml-10 lg:ml-2 xl:mx-0 xl:ml-0 xl:mr-24'>
              Vengriyada 100% grant asosida talim oling talablar: <br />
              - Maktab attestati yoki kollej/litsey diplom <br />
              - Mativatsion insholar <br />
            </p>
            <p className='mr-24 px-1 pt-10 text-black md:ml-10 lg:ml-2 xl:mx-0 xl:ml-0'>
              Imkoniyatlar: <br />
              - Oyiga 120 EURO dan stipendiya <br />
              - Bepul yotoqhona va tibbiy sug`urta <br />
              - Bepul oqish ( grant asosida)\ Yevropa bo’ylab sayoxat uchun viza
              (shengen visa) <br />- 2-Kursdan amerikaga work and travel dasturi
              mavjud
            </p>
            <p className='mr-24 px-1 pt-10 text-black md:ml-10 lg:ml-2 xl:mx-0 xl:ml-0 xl:w-10/12'>
              Ko’proq ma’lumot olish uchun biz bilan aloqaga chiqing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VengriyaMain;
