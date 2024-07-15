import React from "react"
import { SunIcon } from "../assets/Icons/Icons"
import Image from "next/image"
import cat from "../../public/images/images_gif/study.gif"
import OverviewChildTop from "../container/OverviewChild/OverviewChildTop"
import OverviewChildCenter from "../container/OverviewChild/OverviewChildCenter"
import OverviewChildBottom from "../container/OverviewChild/OverviewChildBottom"

function OverviewChild() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden bg-white">
      <div className="container m-auto mt-32 flex w-full xl:mt-48">
        <h1 className="mx-10 mt-20 text-xl font-bold tracking-tight text-black md:mt-32 lg:w-1/4 xl:mx-0">
          03.
        </h1>
        <div className="lg:ml-6">
          <div className="flex">
            <h1
              className="bg-gradient-to-r from-black to-gradient-text bg-clip-text py-2 text-center text-5xl font-bold
           tracking-tight text-black text-transparent sm:ml-8 md:text-7xl"
            >
              Bolalar
            </h1>
            <div className="ml-4 lg:ml-10">
              <SunIcon />
            </div>
          </div>
          <div className="flex">
            <div className="-ml-4 h-12 w-20 sm:ml-0 md:mt-2 md:h-auto md:w-auto">
              <Image
                src={cat}
                width={121}
                height={72}
                alt="#"
                className="rounded-xl object-contain md:rounded-3xl"
              />
            </div>
            <h1
              className="ml-2.5 bg-gradient-to-r from-black to-gradient-text bg-clip-text pb-20 text-center text-5xl font-bold
           tracking-tight text-black text-transparent md:ml-5 md:text-7xl"
            >
              kurslari
            </h1>
          </div>
        </div>
      </div>

      <OverviewChildTop />
      <OverviewChildCenter />
      <OverviewChildBottom />
    </div>
  )
}

export default OverviewChild
