import React, { useState } from 'react';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import NextIcon, {
  HamburgerIcon,
  HoverChizu,
  XIcon,
} from '../assets/Icons/Icons';
import { MobileMenu } from './MobileMenu';
import { useRouter } from 'next/router';
import equals from 'equals';
import { Link } from 'react-scroll/modules';
import { NavbarModal } from './NavbarModal';

function Navbar() {
  const { pathname } = useRouter();
  const [pageState, setPageState] = useState(1);
  const [state, setState] = useState(false);
  const [mobile, setMobile] = useState(false);

  function Hamburger() {
    if (equals(pathname, '/')) {
      return <HamburgerIcon />;
    }
    return <HamburgerIcon />;
  }

  return (
    <div className='fixed z-50 w-full overflow-hidden bg-navbar-bg xl:fixed xl:z-40 xl:grid xl:place-items-center'>
      <div className='m-auto flex w-full items-center justify-between px-5 py-5 font-text xl:container'>
        <Link to={'header'} href={'header'} duration={5000}>
          <h1
            className='cursor-pointer md:ml-5 xl:ml-1.5'
            data-aos='fade-right'
          >
            {/*<Image src={logo} width={125} height={40} alt='#' />*/}
            theneweducation.uz
          </h1>
        </Link>
        <div className='mt-4 hidden justify-center gap-10 text-base text-base  font-medium leading-4 text-black lg:flex'>
          <Link to='about' href={'about'} duration={5000} data-aos='fade-down'>
            <div
              onClick={() => setPageState(1)}
              className={
                pageState === 1
                  ? 'cursor-pointer text-base tracking-widest text-red'
                  : 'cursor-pointer text-base tracking-widest text-black hover:text-red'
              }
            >
              Biz haqimizda
            </div>
            {pageState === 1 ? (
              <div className='m-2'>
                <HoverChizu className='hidden hover:block' />
              </div>
            ) : (
              ' '
            )}
          </Link>

          <Link
            href={'language'}
            to={'language'}
            duration={5000}
            data-aos='fade-down'
            data-aos-delay='100'
          >
            <button
              onClick={() => setPageState(2)}
              className={
                pageState === 2
                  ? 'cursor-pointer text-base tracking-widest text-red'
                  : 'cursor-pointer text-base tracking-widest text-black hover:text-red'
              }
            >
              Til kurslari
            </button>

            {pageState === 2 ? (
              <div className='m-2'>
                <HoverChizu className='hidden hover:block' />
              </div>
            ) : (
              ''
            )}
          </Link>

          <Link
            href={'study'}
            to={'study'}
            duration={5000}
            data-aos='fade-down'
            data-aos-delay='200'
          >
            <button
              onClick={() => setPageState(3)}
              className={
                pageState === 3
                  ? 'cursor-pointer text-base tracking-widest text-red '
                  : 'cursor-pointer text-base tracking-widest text-black hover:text-red'
              }
            >
              Xorijda o’qish
            </button>
            {pageState === 3 ? (
              <div className='m-2'>
                <HoverChizu className='hidden hover:block' />
              </div>
            ) : (
              ''
            )}
          </Link>
          <Link
            href={'child-courses'}
            to={'child-courses'}
            duration={5000}
            data-aos='fade-down'
            data-aos-delay='300'
          >
            <button
              onClick={() => setPageState(4)}
              className={
                pageState === 4
                  ? 'cursor-pointer text-base tracking-widest text-red'
                  : 'cursor-pointer text-base tracking-widest text-black hover:text-red'
              }
            >
              Bolalar kurslari
            </button>
            {pageState === 4 ? (
              <div className='m-2'>
                <HoverChizu className='hidden hover:block' />
              </div>
            ) : (
              ''
            )}
          </Link>

          <Link
            href={'footer'}
            to={'footer'}
            duration={5000}
            data-aos='fade-down'
            data-aos-delay='400'
          >
            <button
              onClick={() => setPageState(5)}
              className={
                pageState === 5
                  ? 'cursor-pointer text-base tracking-widest text-red'
                  : 'cursor-pointer text-base tracking-widest text-black hover:text-red'
              }
            >
              Aloqa
            </button>
            {pageState === 5 ? (
              <div className='-ml-4 mt-2'>
                <HoverChizu className='hidden hover:block' />
              </div>
            ) : (
              ''
            )}
          </Link>
        </div>
        <Link
          href={'NavbarModal'}
          to={'NavbarModal'}
          onClick={() => setState(!state)}
          className='hidden cursor-pointer justify-center  text-base text-base font-medium leading-4 text-black hover:text-red lg:flex'
          data-aos='fade-left'
        >
          <button className='mr-3 text-base  tracking-widest xl:-mt-3 '>
            Kursga yozilish
          </button>
          <div className='cursor-pointer xl:-mt-3'>
            <NextIcon />
          </div>
        </Link>
        <button
          className='z-40 inline h-10 w-10 lg:hidden '
          onClick={() => setMobile(!mobile)}
        >
          {state && (
            <div className='fixed z-50 -mt-2'>
              <XIcon />
            </div>
          )}
          {!mobile && Hamburger()}
        </button>
      </div>
      <div className='inline lg:hidden'>
        {mobile && <MobileMenu open={mobile} close={() => setMobile(false)} />}
      </div>
      <NavbarModal open={state} close={() => setState(false)} />
    </div>
  );
}

export default Navbar;
