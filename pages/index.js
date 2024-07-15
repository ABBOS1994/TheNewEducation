import React, { useEffect, useState } from "react"
import Head from "next/head"
import Navbar from "../src/components/Navbar"
import OverviewHeader from "../src/container/OverviewHeader"
import OverviewGirl from "../src/container/OverviewGirl"
import OverviewMainOne from "../src/container/OverviewMainOne"
import OverviewMainTwo from "../src/container/OverviewMainTwo"
import Footer from "../src/components/Footer"
import OverviewChild from "../src/container/OverviewChild"
import OverviewCarousel from "../src/container/OverviewCarousel"
import AOS from "aos"
import "aos/dist/aos.css"
import { Notification } from "../src/components/Notification"

function Home() {
  const [state, setState] = useState(false)
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      duration: 1200,
    })
  }, [])
  return (
    <div className="bg-white">
      <Head>
        <title>The New Education</title>
        <meta name="title" content="The New Education" />
        <meta
          name="description"
          content="Xorijda o'qish, Til kurslari va Bolalar uchun kurslar"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="/img.jpg" />
        <meta property="og:title" content="English Campus" />
        <meta
          property="og:description"
          content="Xorijda o'qish, Til kurslari va Bolalar uchun kurslar"
        />
        <meta property="og:image" content="/img.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="/img.jpg" />
        <meta property="twitter:title" content="English Campus" />
        <meta
          property="twitter:description"
          content="Xorijda o'qish, Til kurslari va Bolalar uchun kurslar"
        />
        <meta property="twitter:image" content="/img.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-image h-[1600px] bg-white bg-cover bg-no-repeat">
          <Navbar />
          <OverviewHeader />
          <OverviewCarousel />
          <OverviewGirl />
          <OverviewMainOne />
          <OverviewMainTwo />
          <OverviewChild />
          <Footer setState={setState} />
        </div>
      </main>
      <Notification open={state} close={() => setState(false)} />
    </div>
  )
}

export default Home
