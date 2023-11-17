import Image from 'next/image';
import childPhone from '../../public/images/images_gif/childPhone.gif';
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
} from '../assets/Icons/Icons';
import ContactForm from './ContactForm';

function Footer() {
  return (
    <div
      className='footer-image flex h-[1040px] justify-center overflow-hidden bg-white bg-cover bg-no-repeat'
      id='footer'
    >
      <div className='container m-auto' data-aos='flip-down'>
        <div className='mt-52 flex flex-col items-center'>
          <h1
            className='mt-5 bg-gradient-to-r from-black to-gradient-text bg-clip-text pb-2 text-center text-4xl
          font-bold tracking-tight text-black text-transparent md:text-6xl 2xl:text-7xl'
          >
            Aloqaga
          </h1>
          <div className='flex'>
            <div className='-mt-5 h-10 w-16 md:h-auto md:w-auto'>
              <Image
                src={childPhone}
                width={132}
                height={59}
                alt='#'
                className='mt-5 rounded-xl object-contain md:rounded-3xl'
              />
            </div>
            <h1
              className='ml-2 bg-gradient-to-r from-black to-gradient-text bg-clip-text text-center text-4xl  font-bold
            tracking-tight text-black text-transparent md:text-6xl 2xl:text-7xl'
            >
              chiqish
            </h1>
          </div>
          <ContactForm />
          <div className='mt-20 flex w-full justify-center xl:mt-16'>
            <a href='https://www.facebook.com/profile.php'>
              <FacebookIcon />
            </a>
            <a href='https://instagram.com/englishcampus.uz' className='ml-6'>
              <InstagramIcon />
            </a>
            <a href='https://t.me/englishcampus1' className='ml-6'>
              <TelegramIcon />
            </a>
            <a
              href='https://youtube.com/@englishcampuseducation3427'
              className='ml-6'
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
