import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { Link } from "react-scroll/modules"
import {
  FacebookIcon,
  HoverChizu,
  InstagramIcon,
  TelegramIcon,
  XIcon,
  YouTubeIcon,
} from "../assets/Icons/Icons"
import logo from "../../public/images/logo.png"
import Image from "next/image"

export function MobileMenu({ open, close }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 justify-between overflow-y-auto overflow-x-hidden xl:ml-40 2xl:ml-80"
        onClose={close}
      >
        <div className="fixed w-full overflow-x-hidden bg-white px-5 py-5 md:px-0">
          <div className="flex justify-between">
            <div className=" ml-1.5 xl:ml-0">
              <Link to="header" duration={5000}>
                <Image src={logo} alt="#" />
              </Link>
            </div>
            <div className="mr-5 mt-2.5" onClick={close}>
              <XIcon />
            </div>
          </div>

          <ul className="mx-10 py-5 font-text">
            <li className="ml-12 mt-16 flex cursor-pointer sm:ml-32 md:ml-40">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                data-bs-dismiss="modal"
              >
                <p
                  onClick={close}
                  className="mb-1 ml-2 text-xl font-bold tracking-widest text-red  sm:text-3xl md:text-4xl"
                >
                  Biz haqimizda
                </p>
                <div className="ml-12">
                  <HoverChizu className="hidden hover:block" />
                </div>
              </Link>
            </li>

            <li className="ml-12 mt-8 flex justify-between sm:ml-32 md:ml-40">
              <Link to="language" duration={5000}>
                <p
                  onClick={close}
                  className="mx-5 mb-1 text-xl font-bold tracking-widest text-black sm:text-3xl md:text-4xl"
                >
                  Til kurslari
                </p>
              </Link>
            </li>

            <li className="ml-12 mt-8 flex justify-between sm:ml-32 md:ml-40">
              <Link to="study" duration={5000}>
                <p
                  onClick={close}
                  className="mx-2 mb-1 text-xl text-xl font-bold tracking-widest text-black sm:text-3xl md:text-4xl"
                >
                  Xorijda o’qish
                </p>
              </Link>
            </li>

            <li className="border-border-color ml-12 mt-8 flex justify-between sm:ml-32 md:ml-40">
              <Link to="child-courses" duration={5000}>
                <p
                  onClick={close}
                  className="mb-1 text-xl text-xl font-bold tracking-widest text-black sm:text-3xl md:text-4xl"
                >
                  Bolalar kurslari
                </p>
              </Link>
            </li>
            <li className="border-border-color ml-14 mt-8 flex justify-between sm:ml-36 md:ml-48">
              <Link to="footer">
                <p
                  onClick={close}
                  className="mx-10 mb-1 text-xl text-xl font-bold tracking-widest text-black sm:text-3xl md:text-4xl"
                >
                  Aloqa
                </p>
              </Link>
            </li>
          </ul>
          <div className="ml-16 mt-20 flex  w-full md:ml-60 xl:mt-16 ">
            <a href="https://www.facebook.com/profile.php">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com/englishcampus.uz" className="ml-6">
              <InstagramIcon />
            </a>
            <a href="https://t.me/englishcampus1" className="ml-6">
              <TelegramIcon />
            </a>
            <a
              href="https://youtube.com/@englishcampuseducation3427"
              className="ml-6"
            >
              <YouTubeIcon />
            </a>
          </div>

          <p className="ml-6 mt-14 text-base tracking-wide text-black md:ml-48">
            © 2022 English Campus. All rights reserved.
          </p>
        </div>
      </Dialog>
    </Transition>
  )
}
