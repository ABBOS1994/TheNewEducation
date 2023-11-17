import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { CheckedIcon } from '../assets/Icons/Icons';

export function Notification({ open, close }) {
  if (open) {
    setTimeout(() => {}, 1200000);
  }

  return (
    <>
      <div className='pointer-events-none fixed inset-0 right-0 z-50  flex hidden px-4 sm:items-start md:mt-[380px] md:inline'>
        <div className='flex w-full flex-col space-y-4 sm:items-end'>
          <Transition
            show={open}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-5 opacity-100 sm:translate-y-0 sm:translate-x-5'
            enterTo='translate-y-0 opacity-100 sm:-translate-x-5'
            leave='transition ease-in duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='border-text-white mt-8 flex w-72 items-center rounded-xl border border-solid p-2 shadow-2xl
            ring-1 ring-black ring-opacity-5'
            >
              <div className='bg-primary mx-3.5 flex h-7 w-7 items-center justify-center rounded-full rounded-lg'>
                <CheckedIcon />
              </div>
              <p className='text-center font-text text-base font-medium font-medium text-green-700'>
                Ro’yxatdan o’tdingiz !
              </p>
            </div>
          </Transition>
        </div>
      </div>

      <div className='pointer-events-none fixed z-50 -mt-[450px] inline px-4 md:hidden'>
        <div className='flex w-full flex-col items-center space-y-4'>
          <Transition
            show={open}
            as={Fragment}
            enter='transform ease-out duration-300 transition'
            enterFrom='translate-y-10 opacity-100 sm:translate-y-0 sm:translate-x-0'
            enterTo='translate-y-0 opacity-100 sm:-translate-y-5 sm:translate-x-0'
            leave='transition ease-in duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div
              className='border-text-white mt-8 flex w-72 items-center rounded-xl border border-solid bg-white p-2 shadow-2xl
            ring-1 ring-black ring-opacity-5'
            >
              <div className='mx-3.5 flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50'>
                <CheckedIcon />
              </div>

              <p className='text-center font-text text-base font-medium font-medium text-green-700'>
                Ro’yxatdan o’tdingiz !
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
