import React from "react"
import NextIcon, { Galochka, Undov } from "../../assets/Icons/Icons"
import { Link } from "react-scroll/modules"

function OverviewMainTwoBottomLeft() {
  return (
    <div
      className="ml-4 h-auto w-11/12 rounded-3xl bg-germain md:ml-8 lg:ml-0 lg:w-[475px] xl:w-1/2"
      data-aos="fade-right"
    >
      <h1 className="ml-8 pt-10 text-2xl text-black xl:ml-0 xl:w-8/12 xl:px-10 xl:text-3xl">
        Janubiy Koreaning nufuzli Universitetlaridagi bakalavr dasturiga kirish
      </h1>

      <div className="ml-8 mt-6 flex xl:ml-14">
        <div className="mt-1">
          <Undov />
        </div>
        <p className="pl-3 text-base text-black">6 ta bo’lim, 46 fakultet</p>
      </div>

      <div className=" ml-8 mt-12 xl:ml-14">
        <div className="flex">
          <div className="mt-2">
            <Galochka />
          </div>
          <h1 className="pl-3 text-xl text-black">Gumanitar fanlar</h1>
        </div>
        <p className="ml-8 w-10/12 pt-2  text-black xl:w-8/12">
          Yoshlar tarbiyasi fakulteti Konsalting yuridik fakulteti Ma’muriy
          boshqaruv fakulteti Politsiya boshqaruvi fakulteti Ijtimoiy ta’minot
          fakulteti
        </p>
      </div>

      <div className=" ml-8 mt-7 xl:ml-14">
        <div className="flex">
          <div className="mt-2">
            <Galochka />
          </div>
          <h1 className="pl-3 text-xl text-black">Global menejment bo’limi</h1>
        </div>
        <p className="ml-8 w-10/12 pt-2 text-black xl:w-8/12">
          Menejment fakulteti Xalqaro savdo fakulteti Turizm fakulteti Moliyaviy
          menejment fakulteti Nia IT fakulteti moliya menejmenti Global
          madaniyat sanoati fakulteti Buxgalteriya fakulteti.
        </p>
      </div>

      <div className=" ml-8 mt-7 xl:ml-14">
        <div className="flex">
          <div className="mt-2">
            <Galochka />
          </div>
          <h1 className="pl-3 text-xl text-black">Aniq fanlar bo’limi</h1>
        </div>
        <p className="ml-8 w-11/12 pt-2 text-black xl:w-8/12">
          Kimyoviy texnologiya fakulteti Oziq-ovqat va ovqatlanish fakulteti
          Atrof-muhitni muhofaza qilish fakulteti Hayotni taminlash tizimlari
          fakulteti auk Sport fakulteti Ijtimoiy va jismoniy tarbiya fakulteti
          Sport tibbiyoti fakulteti.
        </p>
      </div>

      <div className=" ml-8 mt-7 xl:ml-14">
        <div className="flex">
          <div className="mt-2">
            <Galochka />
          </div>
          <h1 className="pl-3 text-xl text-black">Politexnika bo’limi</h1>
        </div>
        <p className="ml-8 mr-2 pt-2 text-black xl:mr-0 xl:w-8/12">
          Kompyuter injiniringi fakulteti Fakultet Kompyuter fanlari axborot va
          aloqa Fakultet Elektron texnologiyalar fakulteti elektrotexnika va
          elektronika Fakultet Elektron axborot fakulteti kimyoviy texnologiya
          Fakultet nano texnologiya muhandisligi Fakultet Fakultet Mashinasozlik
          Axborot xavfsizligi fakulteti.
        </p>
      </div>

      <div className=" ml-8 mt-7 xl:ml-14">
        <div className="flex">
          <div className="mt-2">
            <Galochka />
          </div>
          <h1 className="pl-3 text-xl text-black">Tibbiyot bo’limi</h1>
        </div>
        <p className="ml-8 mr-2 pt-2 text-black xl:mr-0 xl:w-8/12">
          Sog’liqni saqlash fakulteti Sog’liqni saqlash va biotexnologiya
          fakulteti Tibbiyot PT muhandisligi fakulteti Tibbiyot texnologiyalari
          fakulteti Tibbiyot muhandisligi fakulteti.
        </p>
      </div>

      <div className=" ml-8 mt-7 xl:ml-14">
        <div className="flex">
          <div className="mt-2">
            <Galochka />
          </div>
          <h1 className="pl-3 text-xl text-black">
            SCH media laboratoriyalari bo’limi
          </h1>
        </div>
        <p className="ml-8 pt-2 text-black xl:w-8/12">
          Fakultet koreys tilini o’rganish Fakultet Koreyashunoslik
          Anglo-Amerika tadqiqotlari fakulteti Fakultet Sinologiya Media
          kommunikatsiyalari fakulteti Fakultet arxitektura Raqamli animatsiya
          fakulteti Narsalar interneti moddiy muhandislik fakulteti Fakultet
          Aqlli avtomobillar fakulteti Energetika tizimlari fakulteti Fakultet
          teatr sanati va multimedia
        </p>
      </div>

      <Link to="footer" duration={5000}>
        <div
          className="mx-10 mt-20 flex h-16 w-10/12  cursor-pointer items-center justify-center rounded-full bg-white lg:mt-40
         xl:mt-48"
        >
          <p className="mr-3 flex items-center text-base tracking-widest text-black text-black">
            Kursga yozilish
          </p>
          <div className="rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish text-transparent">
            <NextIcon />
          </div>
        </div>
      </Link>
      <h1 className="mt-8 text-germain">Koэproq malumot olish</h1>
    </div>
  )
}

export default OverviewMainTwoBottomLeft
