import React from "react"
import { Undov, Galochka } from "../../assets/Icons/Icons"
import Image from "next/image"
import ok from "../../../public/images/false.png"
import no from "../../../public/images/truee.png"

function OverviewChildBottom() {
  return (
    <div className="container m-auto mt-10 lg:flex xl:mt-20">
      <div
        className="ml-5 w-11/12 rounded-3xl bg-muted p-5 md:p-10 lg:ml-0 lg:w-1/2"
        data-aos="flip-right"
      >
        <div className="flex items-start justify-between gap-4 md:gap-32">
          <div className="gap-2">
            <h1 className="w-1/2 text-2xl font-bold tracking-tight text-black xl:text-4xl">
              Mavjud mumammolar
            </h1>
          </div>
          <div className="h-20 w-20 md:h-auto md:w-auto lg:w-10 lg:w-10">
            <Image
              src={ok}
              width={60}
              height={60}
              className="rounded-lg"
              alt="#"
            />
          </div>
        </div>
        <div className="mt-12 items-start gap-4">
          <div className="flex items-center gap-3 p-0">
            <Undov />
            <p className="items-center text-sm text-black md:text-base">
              Farzandingiz o’jarmi?
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 p-0">
            <Undov />
            <p className="items-center text-sm text-black md:text-base">
              Husnixatidan qoniqmaysizmi?
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 p-0">
            <Undov />
            <p className="items-center text-sm text-black md:text-base">
              Xotirasi sustmi?
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 p-0">
            <Undov />
            <p className="items-center text-sm text-black md:text-base">
              Yangi insonlar bilan tez chiqisha olmaydimi?
            </p>
          </div>
        </div>
      </div>

      <div
        className="ml-5 mt-5 w-11/12 rounded-3xl bg-muted p-5 md:p-10 lg:mt-0 lg:w-1/2"
        data-aos="flip-left"
      >
        <div className="flex items-start justify-between gap-4 md:gap-32">
          <div className="gap-2">
            <h1 className="w-3/4 text-2xl font-bold tracking-tight text-black text-black lg:w-full xl:w-1/2 xl:text-4xl">
              Muammolarning bizdagi yechimi
            </h1>
          </div>
          <div className="h-10 w-24 md:h-auto md:w-auto xl:w-10">
            <Image
              src={no}
              width={60}
              height={60}
              className="rounded-lg"
              alt="#"
            />
          </div>
        </div>

        <div className="mt-10 items-start gap-4">
          <div className="flex items-center gap-3 p-0">
            <Galochka />
            <p className="w-full items-center text-base text-sm text-black  md:text-base xl:w-full">
              Bizdagi malakali ustozlarning birinchi darslarining o’zidayoq
              farzandingizdagi o’zgarishlarni ko’rib lol qolasiz
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 p-0">
            <Galochka />
            <p className="w-full items-center text-base text-sm text-black md:text-base xl:w-full">
              Maxsus mashg’ulotlarimiz orqali farzandingiz husnixati birnecha
              barobar yaxshilanadi va butun umri davomida chiroyli husnixat
              bilan yoza oladi
            </p>
          </div>
          <div className="mt-4 flex items-center gap-3 p-0">
            <Galochka />
            <p className="w-full items-center text-base text-sm text-black md:text-base xl:w-full">
              Interaktiv darslar yordamida farzandingiz xotirasi rivojlanadi
            </p>
          </div>
          <div className="my-4 flex items-center gap-3 p-0">
            <Galochka />
            <p className="w-full items-center text-base text-sm text-black md:text-base xl:w-full">
              Bizdagi samimiy ustozlar va ahillik jamoa shiori ostida harakat
              qiluvchi malakali mutaxassislarimiz farzandlaringizni, yangi
              insonlar bilan tez chiqisha olishi uchun barcha ko’nikmalarni
              sindirishadi
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewChildBottom
