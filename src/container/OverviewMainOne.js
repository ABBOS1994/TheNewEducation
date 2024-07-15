import React, { useState } from "react"
import study from "../../public/images/images_gif/study.gif"
import NextIcon, { Chiziqcha, Undov, Galochka } from "../assets/Icons/Icons"
import Image from "next/image"
import lesson from "../../public/images/lesson.png"
import ok from "../../public/images/false.png"
import no from "../../public/images/truee.png"
import date from "../../public/images/kalendar.png"
import lessons from "../../public/images/dars.png"
import time from "../../public/images/time.png"
import next from "../../public/images/next.png"
import call from "../../public/images/call.png"
import tru from "../../public/images/tru.png"
import conversation from "../../public/images/conversation.png"
import { NavbarProductMenu } from "../components/NavbarProductMenu"

function OverviewMainOne() {
  const [products, setProducts] = useState(false)
  const [activeNum, setActiveNum] = useState(0)

  return (
    <div className="overflow-hidden bg-white" id="language">
      <div className="container m-auto mt-32 flex xl:mt-52">
        <h1 className="ml-10 mt-20 text-xl font-bold tracking-tight text-black md:mt-32 lg:w-1/4">
          01.
        </h1>

        <div className="ml-12 xl:ml-6">
          <div className="flex">
            <h1
              className="bg-gradient-to-r from-black to-gradient-text bg-clip-text py-2 text-center text-5xl font-bold
           tracking-tight text-black text-transparent sm:ml-8 md:text-7xl"
            >
              Xorijiy til
            </h1>
            <div className="ml-4 lg:ml-10">
              <Chiziqcha />
            </div>
          </div>
          <div className="flex">
            <div className="-ml-4 h-12 w-20 sm:ml-0 md:mt-2 md:h-auto md:w-auto">
              <Image
                src={study}
                width={121}
                height={72}
                alt="#"
                className="rounded-xl object-contain md:rounded-3xl"
              />
            </div>
            <h1
              className="ml-2.5 bg-gradient-to-r from-black to-gradient-text bg-clip-text pb-24 text-center text-5xl font-bold
           tracking-tight text-black text-transparent md:ml-5 md:text-7xl"
            >
              kurslari
            </h1>
          </div>
        </div>
      </div>

      <div className="container m-auto lg:mt-20 lg:flex">
        <div
          className="ml-5 h-full w-11/12 rounded-3xl bg-muted p-5 md:p-10 lg:w-1/2"
          data-aos="fade-down-right"
        >
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-full text-2xl font-bold tracking-tight text-black md:text-3xl">
                Ingliz tili kursi
              </h1>
              <p className="mt-2 text-base font-normal text-light-black">
                Tanishish menyusi
              </p>
            </div>
            <div className="h-16 w-40 md:h-auto md:w-auto">
              <Image
                src={"/images/Ingliz.png"}
                width={160}
                height={100}
                className="rounded-2xl md:rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mt-14">
              <div className="flex">
                <Image src={date} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Dars kunlari:
                </p>
              </div>

              <div className="mt-4 flex">
                <Image src={time} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Dars davomiyligi:
                </p>
              </div>

              <div className="mt-4 flex">
                <Image src={next} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Intensiv kurs:
                </p>
              </div>

              <div className="mt-4 flex">
                <Image src={call} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Har bir bosqich davomiyligi:
                </p>
              </div>
              <div className="mt-4 flex">
                <Image src={tru} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  IELTS tayyorlov kursi:
                </p>
              </div>
            </div>

            <div className="mr-4 lg:mr-0 xl:mr-20 2xl:mr-10">
              <h1 className="mt-14 font-title text-sm font-medium text-black md:text-base">
                Haftada 3 marotaba
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                90 minut
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                2 oy
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                3 oy
              </h1>
              <h1 className="mt-9 w-10/12 font-title text-sm font-medium text-black sm:mt-4 md:w-full md:text-base lg:mt-9 lg:w-9/12 xl:mt-3">
                Boshlang’ich tayyorlov 2 oy
              </h1>
            </div>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation()
              setActiveNum(1)
              setProducts(!products)
            }}
            className="{productPathColor()} mt-16 flex h-16 w-full items-center justify-center rounded-full bg-white"
          >
            <p className="mr-3 flex items-center text-base tracking-widest text-black">
              Kursga yozilish
            </p>
            <div className=" rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent">
              <NextIcon />
            </div>
          </button>
        </div>
        <div
          className="mx-5 mt-5 h-full w-11/12 rounded-3xl bg-muted p-5 md:p-10 lg:mt-0 lg:w-1/2"
          data-aos="fade-down-left"
        >
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-full text-2xl font-bold tracking-tight text-black md:text-3xl">
                Koreys tili kursi
              </h1>
              <p className="mt-2 text-base font-normal text-light-black">
                Tanishish menyusi
              </p>
            </div>
            <div className="h-16 w-40 md:h-auto md:w-auto">
              <Image
                src={"/images/karea.png"}
                width={160}
                height={100}
                className="rounded-2xl md:rounded-lg"
                alt="#"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="mt-14">
              <div className="flex">
                <Image src={date} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Dars kunlari:
                </p>
              </div>

              <div className="mt-4 flex">
                <Image src={time} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Dars davomiyligi:
                </p>
              </div>
              <div className="mt-4 flex">
                <Image src={lessons} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  1 oylik darslar soni:
                </p>
              </div>

              <div className="mt-4 flex">
                <Image src={call} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base lg:w-10/12">
                  Har bir bosqich davomiyligi:
                </p>
              </div>
            </div>

            <div className="mr-14 lg:mr-0 xl:mr-20 2xl:mr-10">
              <h1 className="mt-12 font-title text-sm font-medium text-black md:text-base lg:mt-14">
                Haftada 3 marotaba
              </h1>
              <h1 className="mt-1 font-title text-sm font-medium text-black md:text-base lg:mt-4">
                90 minut
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                12 ta
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base lg:mt-8">
                3 oy
              </h1>
            </div>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation()
              setActiveNum(2)
              setProducts(!products)
            }}
            className="mt-[128px] flex h-16 w-full items-center justify-center rounded-full bg-white xl:mt-[100px]"
          >
            <p className="mr-3 flex items-center text-base tracking-widest text-black">
              Kursga yozilish
            </p>
            <div className=" rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent">
              <NextIcon />
            </div>
          </button>
        </div>
      </div>

      <div className="container m-auto mt-5 lg:flex">
        <div
          className="ml-5 w-11/12 rounded-3xl bg-muted p-5 md:p-10 lg:w-1/2"
          data-aos="fade-right"
        >
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-full text-2xl font-bold tracking-tight text-black md:text-3xl">
                Rus tili kursi
              </h1>
              <p className="mt-2 text-base font-normal text-light-black">
                Tanishish menyusi
              </p>
            </div>
            <div className="h-16 w-40 md:h-auto md:w-auto">
              <Image
                src={"/images/rus.png"}
                width={160}
                height={100}
                className="rounded-2xl md:rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="mt-14">
              <div className="flex">
                <Image src={date} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Dars kunlari:
                </p>
              </div>
              <div className="mt-4 flex">
                <Image src={time} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Dars davomiyligi:
                </p>
              </div>
              <div className="mt-4 flex">
                <Image src={next} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Intensiv kurs:
                </p>
              </div>
              <div className="mt-4 flex">
                <Image src={call} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Har bir bosqich davomiyligi:
                </p>
              </div>
              <div className="mt-4 flex">
                <Image src={conversation} className="object-contain" alt="#" />
                <p className="ml-2.5 text-sm font-normal tracking-tight text-light-black md:text-base">
                  Mustaqil sozlashuv:
                </p>
              </div>
            </div>

            <div className="mr-16 lg:mr-20 xl:mr-24">
              <h1 className="mt-14 font-title text-sm font-medium text-black md:text-base">
                Haftada 3 marotaba
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                90 minut
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                2 oy
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                3 oy
              </h1>
              <h1 className="mt-4 font-title text-sm font-medium text-black md:text-base">
                3 oy
              </h1>
            </div>
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation()
              setActiveNum(3)
              setProducts(!products)
            }}
            className="mt-16 flex h-16 w-full items-center justify-center rounded-full bg-white lg:mt-32 xl:mt-16"
          >
            <p className="mr-3 flex items-center text-base tracking-widest text-black">
              Kursga yozilish
            </p>
            <div className=" rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent">
              <NextIcon />
            </div>
          </button>
        </div>
        <div
          className="mx-5 mt-5 w-11/12 rounded-3xl bg-muted p-5 md:p-10 lg:mt-0 lg:w-1/2"
          data-aos="fade-left"
        >
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-11/12 w-full text-2xl font-bold tracking-tight text-black md:text-3xl">
                Nega aynan Biz?
              </h1>
            </div>
            <div className="hidden h-16 w-40 md:h-auto md:w-auto lg:block">
              <Image
                src={lesson}
                width={160}
                height={100}
                className="rounded-2xl md:rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className=" rounded-3xl bg-germain pb-5">
            <p className="w-11/12 pt-24 text-xl text-black md:w-8/12">
              English Campus oʻquv markazi oʻquvchilarini shunchaki kelib oʻqib
              ketishlarini emas, balki natijaga erishishlarining tarafdoridir!
              Biz sizga natijaga erishishingizni kafolatlaymiz.
            </p>
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation()
              setActiveNum(null)
              setProducts(!products)
            }}
            className="mt-[88px] flex h-16 w-full items-center justify-center rounded-full bg-white xl:mt-16 2xl:mt-[75px]"
          >
            <p className="mr-3 flex items-center text-base tracking-widest text-black">
              Kursga yozilish
            </p>
            <div className=" rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent">
              <NextIcon />
            </div>
          </button>
        </div>
      </div>

      <div className="container m-auto mt-10 w-full lg:flex xl:mt-20">
        <div
          className="ml-4 w-11/12  rounded-3xl  bg-muted p-5 md:p-10  lg:w-1/2"
          data-aos="fade-up-right"
        >
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-1/2 w-full text-2xl font-bold tracking-tight text-black md:text-4xl">
                Mavjud muammolar
              </h1>
            </div>
            <div className="h-10 w-10 md:h-auto md:w-auto">
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
                Til o’rganishdagi dangasalikni yenga olmaslik
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 p-0">
              <Undov />
              <p className="items-center text-sm text-black md:text-base">
                Sifatsiz ta’lim beruvchi ustozlar
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 p-0">
              <Undov />
              <p className="items-center text-sm text-black md:text-base">
                Zerikarli darslar
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 p-0">
              <Undov />
              <p className="items-center text-sm text-black md:text-base">
                Noaniq yo’nalishda dars berilishi
              </p>
            </div>
            <div className="my-4 flex items-center gap-3 p-0">
              <Undov />
              <p className="items-center text-sm text-black md:text-base">
                Xorijiy tilni o’rganib bo’lish uchun, aniq vaqt qo’yilmasligi
              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-4 mt-5 w-11/12  rounded-3xl bg-muted p-5 md:p-10 lg:mt-0 lg:w-1/2"
          data-aos="fade-up-left"
        >
          <div className="flex items-start justify-between gap-4 md:gap-32">
            <div className="gap-2">
              <h1 className="w-2/4 text-2xl font-bold tracking-tight text-black text-black md:w-2/3 md:text-4xl lg:w-full">
                Muammolarning bizdagi yechimi
              </h1>
            </div>
            <div className="h-10 w-10 md:h-auto md:w-auto">
              <Image
                src={no}
                width={60}
                height={60}
                className="rounded-lg"
                alt="#"
              />
            </div>
          </div>

          <div className=" mt-10 items-start gap-4">
            <div className="flex items-center gap-3 p-0">
              <Galochka />
              <p className="w-10/12 items-center text-base text-sm text-black md:w-3/5 md:text-base lg:w-full">
                Xorijiy tilni o’rganish davridagi o’zini qo’lga olish va
                dangasalikni yengish bo’yicha ustozlardan maslahat
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 p-0">
              <Galochka />
              <p className="w-10/12 items-center text-base text-sm text-black md:w-3/5 md:text-base lg:w-full">
                Eng malakali O’zbekiston bo’ylab ko’zga ko’ringan
                mutaxassislardan bilim olish imkoni
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3 p-0">
              <Galochka />
              <p className="w-10/12 items-center text-base text-sm text-black md:w-3/5 md:text-base lg:w-full">
                Aniq metodikalar asosida Intensiv darsliklar ketma-ketligi
              </p>
            </div>
            <div className="my-4 flex items-center gap-3 p-0">
              <Galochka />
              <p className="w-10/12 items-center text-base text-sm text-black md:w-3/5 md:text-base lg:w-full">
                Belgilangan muddat ichida xorijiy tilni oson o’rganish
              </p>
            </div>
          </div>
        </div>
      </div>
      <NavbarProductMenu
        open={products}
        close={() => setProducts(false)}
        active={activeNum}
      />
    </div>
  )
}

export default OverviewMainOne
