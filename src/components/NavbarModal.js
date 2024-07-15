import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import { XXIcon } from "../assets/Icons/Icons"
import book from "../../public/images/book.png"
import globus from "../../public/images/Globus.png"
import child from "../../public/images/Child.png"
import Usa from "../../public/images/usa.png"
import Rus from "../../public/images/rusflag.png"
import Karea2 from "../../public/images/Karea2.png"

import ContactFormNavbar from "./ContactFormNavbar"

export function NavbarModal({ open, close }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 justify-between overflow-y-auto  overflow-x-hidden xl:ml-40 2xl:ml-80"
        onClose={close}
      >
        <div className="items-center rounded-3xl bg-white px-8 py-5 shadow-2xl xl:w-10/12">
          <div className="flex h-24 justify-between p-4">
            <h1
              className="ml-8 flex flex items-center bg-gradient-to-r from-black to-gradient-text
                  bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-3xl xl:pb-12 xl:pt-12 2xl:pb-14 2xl:pt-12"
            >
              Kurs uchun ariza yuborish
            </h1>
            <div
              className="mt-2.5 flex h-10 cursor-pointer rounded-2xl border border-solid border-black/20 px-3 py-3 sm:px-5
            sm:py-5  2xl:h-20 2xl:py-7"
              onClick={close}
            >
              <div className="sm:-mt-1.5 2xl:mt-0">
                <XXIcon />
              </div>
              <p className="-mt-1.5 ml-3 hidden text-base tracking-wide text-black xl:text-xl 2xl:block">
                Oynani yopish
              </p>
            </div>
          </div>
          <div className="ml-12 mt-4">
            <h1 className=" py-4 text-base font-medium tracking-wide text-black">
              Bo’limni tanlang
            </h1>
            <div className="mt-5 flex flex-wrap gap-5">
              <button className="flex h-14 items-center rounded-3xl border border-solid border-black/20 bg-white px-5">
                <div className="h-6 w-6 md:h-auto md:w-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={book}
                    alt="#"
                  />
                </div>
                <h1 className=" ml-3 flex text-base font-medium tracking-wide text-black md:ml-4 md:text-xl">
                  Til kurslari
                </h1>
              </button>

              <button className="flex h-14 items-center rounded-3xl border border-solid border-black/20 px-5">
                <div className="h-6 w-6 md:h-auto md:w-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={globus}
                    alt="#"
                  />
                </div>
                <h1 className="ml-3 flex text-base font-medium tracking-wide text-black md:ml-4 md:text-xl">
                  Xorijda o’qish
                </h1>
              </button>

              <button className="flex h-14 items-center rounded-3xl border border-solid border-black/20 px-5">
                <div className="h-6 w-6 md:h-auto md:w-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={child}
                    alt="#"
                  />
                </div>
                <h1 className="ml-3 flex text-base font-medium tracking-wide text-black md:ml-4 md:text-xl">
                  Bolalar kurslari
                </h1>
              </button>
            </div>
          </div>
          <div className="ml-12">
            <h1 className="mt-10 py-4 text-base font-medium tracking-wide text-black">
              Ichki bo’limni tanlang
            </h1>
            <div className="mt-5 flex flex-wrap gap-5">
              <button
                className="flex h-14 items-center rounded-3xl
               border border-solid border-black/20 bg-white px-5"
              >
                <div className="h-6 w-6 md:h-auto md:w-auto">
                  <Image
                    width={24}
                    height={24}
                    src={Usa}
                    alt="#"
                    className="object-contain"
                  />
                </div>
                <h1 className="ml-3 flex text-base font-medium tracking-wide text-black md:ml-4 md:text-xl">
                  Ingliz tili
                </h1>
              </button>

              <button className="flex h-14 items-center rounded-3xl border border-solid border-black/20 px-5">
                <div className="h-6 w-6 md:h-auto md:w-auto">
                  <Image
                    className="object-contain"
                    width={24}
                    height={24}
                    src={Karea2}
                    alt="#"
                  />
                </div>
                <h1 className="ml-3 flex text-base font-medium tracking-wide text-black md:ml-4 md:text-xl">
                  Koreas tili
                </h1>
              </button>

              <button className="flex h-14 items-center rounded-3xl border border-solid border-black/20 px-5">
                <div className="h-6 w-6 md:h-auto md:w-auto">
                  <Image width={24} height={24} src={Rus} alt="" />
                </div>
                <h1 className="ml-3 flex text-base font-medium tracking-wide text-black md:ml-4 md:text-xl">
                  Rus tili
                </h1>
              </button>
            </div>
          </div>
          <h1 className="ml-14 mt-8 text-base text-black">
            O’zingiz haqingizda
          </h1>
          <ContactFormNavbar />
        </div>
      </Dialog>
    </Transition>
  )
}
