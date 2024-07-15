import React from "react"
import globus from "../../public/images/Globus.png"
import book from "../../public/images/book.png"
import child from "../../public/images/Child.png"
import olmaxon from "../../public/images/images_gif/olmaxon.gif"
import cofe from "../../public/images/images_gif/cofe.gif"
import cat from "../../public/images/images_gif/cat.gif"
import smart_boy from "../../public/images/images_gif/smart-boy.gif"
import { Link } from "react-scroll/modules"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "aos/dist/aos.css"

import {
  ChiziqButton,
  ChiziqButtonLeft,
  ChiziqButtonRight,
  ChiziqCenterLeft,
  ChiziqCenterRight,
  ChiziqTopLeft,
  ChiziqTopRight,
} from "../assets/Icons/Icons"
import Image from "next/image"

function OverviewHeader() {
  return (
    <div id="header">
      <div className="container m-auto w-full">
        <div className="flex justify-center pt-40 lg:pt-60">
          <div>
            <ChiziqTopLeft />
          </div>
          <h1 className="mt-5 text-center text-3xl font-bold tracking-tight text-black md:text-7xl">
            Bizdan
          </h1>
          <Image
            src={olmaxon}
            width={132}
            height={89}
            alt="#"
            className="mx-10 mt-5 hidden rounded-3xl lg:block"
          />
          <h1
            className="ml-2 mt-5 text-center text-3xl font-bold tracking-tight text-black md:ml-4
          md:text-7xl lg:ml-0 lg:ml-2"
          >
            Siz uchun
          </h1>
          <div className="-ml-5 -mt-4 lg:-mt-0">
            <ChiziqTopRight />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-center lg:-ml-10 lg:flex-nowrap">
          <div className="mt-10 hidden lg:block">
            <ChiziqCenterLeft />
          </div>
          <div
            className="flex h-16 items-center rounded-3xl bg-gradient-to-r from-gradientStart to-gradientFinish px-5
           md:ml-6 md:h-24 md:px-6"
          >
            <div className="h-6 w-6 md:h-auto md:w-auto">
              <Image
                className="object-contain"
                width={48}
                height={48}
                src={globus}
                alt="#"
              />
            </div>
            <h1 className="ml-3 flex items-center text-xl font-bold text-white md:ml-4 md:text-5xl">
              Xorijda o’qish
            </h1>
          </div>
          <Image
            src={cofe}
            width={158}
            height={89}
            className="mx-2.5 h-16 w-28 rounded-2xl md:mx-5 md:h-24 md:w-36 lg:rounded-3xl"
            alt="#"
          />

          <div className="mt-3 flex lg:mt-0">
            <div className="mr-3 block h-12 w-24 md:mx-5 md:h-auto md:w-auto lg:hidden">
              <Image
                src={smart_boy}
                width={163}
                height={89}
                alt="#"
                className="rounded-2xl object-cover lg:rounded-3xl"
              />
            </div>
            <div
              className="flex h-16 items-center rounded-3xl
            bg-gradient-to-r from-gradientStart to-gradientFinish px-6 md:h-24"
            >
              <div className="h-6 w-6 md:h-auto md:w-auto">
                <Image
                  className="object-contain"
                  width={48}
                  height={48}
                  src={book}
                  alt="#"
                />
              </div>
              <h1 className="ml-3 flex items-center text-xl font-bold text-white md:ml-4 md:text-5xl">
                Til kurslari
              </h1>
            </div>
            <div className="-mt-6 ml-6 hidden lg:block">
              <ChiziqCenterRight />
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-row-reverse justify-center md:mt-3 lg:-mt-5 xl:flex-row">
          <div className="mx-4 h-[60px] w-20 overflow-hidden rounded-2xl md:h-24 md:w-32 lg:rounded-3xl xl:mx-5">
            <Image src={cat} alt="#" />
          </div>
          <div
            className="ml-1 flex h-16 items-center rounded-3xl bg-gradient-to-r from-gradientStart
          to-gradientFinish px-6 md:ml-3 md:h-24 lg:ml-0"
          >
            <div className="h-6 w-6 md:h-auto md:w-auto">
              <Image
                className="object-contain"
                width={48}
                height={48}
                src={child}
                alt="#"
              />
            </div>
            <h1 className="ml-3 flex items-center text-xl font-bold text-white md:text-5xl lg:ml-4">
              Bolalar kurslari
            </h1>
          </div>
          <div className="mx-5 hidden lg:block">
            <Image
              src={smart_boy}
              width={163}
              height={95}
              alt="#"
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="my-8 ml-24 flex justify-between lg:mx-72 lg:flex">
          <div>
            <ChiziqButtonLeft />
          </div>
          <div className="mr-80 hidden lg:block">
            <ChiziqButtonRight />
          </div>
        </div>
        <div>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <button
              className="m-auto hidden h-11 w-9 animate-bounce
               rounded-full bg-white/30 backdrop-blur-lg md:block"
              id="about"
            >
              <ChiziqButton />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OverviewHeader
