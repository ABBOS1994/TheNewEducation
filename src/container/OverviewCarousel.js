import React from "react"
import Link from "next/link"
import Image from "next/image"

import Linguakill from "../../public/images/Linguaskill.png"
import Programmer from "../../public/images/image 21.png"

import Germany from "../../public/images/Germany.png"
import Vengriya from "../../public/images/Vengriya.png"

import { Left, Right } from "../assets/Icons/Icons"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

function OverviewCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div
        className="carousel-button-group absolute  top-0 mb-4 flex
          w-full items-center justify-end gap-4 md:-left-28"
      >
        <button className="-mt-4 block p-1 md:p-3" onClick={() => previous()}>
          <div className="w-12 pl-1">
            <Left/>
          </div>
        </button>
        <button onClick={() => next()}>
          <Right/>
        </button>
      </div>
    )
  }

  return (
    <div className="mt-32">
      <div className="container relative  m-auto py-20">
        <h1 className="-mt-16 ml-10 text-xl font-bold text-black md:text-2xl lg:ml-2">
          So’ngi yangiliklar
        </h1>
        <Carousel
          infinite={true}
          swipeable={true}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          shouldResetAutoplay={true}
          customButtonGroup={<ButtonGroup/>}
        >
          <div className="mt-10 ">
            <Link href="/itep">
              <div className="isolate mx-8  flex w-10/12 flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm lg:mx-0">
                <div className="m-5">
                  <Image src={Programmer} width={347} height={230} alt="#"/>
                  <span
                    className={"mt-5 w-11/12 text-2xl font-bold text-black"}
                  >
                    Linguaskill Ingliz tili testi bilan tez natijalar
                  </span>
                  <p className="mt-2 text-black">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mt-10 ">
            <Link href="/Linguakill">
              <div className="isolate mx-8  flex w-10/12 flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm lg:mx-0">
                <div className="m-5">
                  <Image src={Linguakill} width={347} height={230} alt="#"/>
                  <span
                    className={"mt-5 w-11/12 text-2xl font-bold text-black"}
                  >
                    Linguaskill Ingliz tili testi bilan tez natijalar
                  </span>
                  <p className="mt-2 text-black">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/">
              <div className="isolate mx-8 flex w-10/12 flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm lg:mx-0">
                <div className="m-5">
                  <Image src={Germany} width={347} height={230} alt="#"/>
                  <h1 className="mt-5 w-11/12 text-2xl font-bold text-black">
                    Germaniyada work and travel dasturi
                  </h1>
                  <p className="mt-2 text-black">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/Vengriya">
              <div className="isolate mx-8 flex w-10/12 flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm lg:mx-0">
                <div className="m-5">
                  <Image src={Vengriya} width={347} height={230} alt="#"/>
                  <h1 className="mt-5 w-11/12 text-2xl font-bold text-black">
                    Vengriyada talim olish imkoniyati
                  </h1>
                  <p className="mt-2 text-black">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10">
            <Link href="/Linguakill">
              <div className="isolate mx-8 flex w-10/12 flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm lg:mx-0">
                <div className="m-5">
                  <Image src={Linguakill} width={347} height={230} alt="#"/>
                  <h1 className="mt-5 w-11/12 text-2xl font-bold text-black">
                    Linguaskill Ingliz tili testi bilan tez natijalar
                  </h1>
                  <p className="mt-2 text-black">12 Noy 2022 • Yangiliklar</p>
                </div>
              </div>
            </Link>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default OverviewCarousel
