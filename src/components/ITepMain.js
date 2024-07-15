//src/components/ITepMain.js
import React from "react"
import Image from "next/image"
import Programmer from "../../public/images/image 21.png"
import NextIcon from "../assets/Icons/Icons"
import Link from "next/link"

export default function ITepMain() {
  return (
    <div className="pt-36 md:pt-60">
      <div className="container m-auto flex w-full flex-col items-center">
        <h1
          className="-ml-16 w-9/12 bg-gradient-to-r from-black to-gradient-text
        bg-clip-text py-1 py-2 text-center text-start text-3xl font-bold tracking-tight
        text-transparent xl:ml-20 xl:ml-28 xl:w-7/12 xl:text-5xl 2xl:ml-16">
          ITEP (International Test of English Proficiency)
        </h1>
        <p
          className=" -ml-[200px] mt-5 text-sm text-light-black md:-ml-[470px] lg:-ml-[670px] xl:-ml-[470px] 2xl:-ml-[670px]">
          17 May 2023 • Yangiliklar
        </p>
        <div className="mt-8 flex">
          <div>
            <Image src={Programmer} width={387} height={278} alt="Programmer"/>
          </div>
        </div>
        <div className="w-full xl:w-11/12">
          <div className="bg-white p-10">
            <p className="text-black">
              Oldinlari chet-el da o`qish yoki o`zimizda turli davlat ta`lim markazlarida ishga kirish uchun, bizga
              ingliz tili darajimizni aniqlab beruvchi asosan ikki xil turdagi, IELTS yoki TOEFL imtihonlari mavjud
              bo`lgan bo`lsa, hozirgi kunga kelib ularning soni bir nechtaga yetdi.
            </p>
            <p className="text-black mt-8">
              Bugungi postda xuddi shu kabi imtixonlardan biri bo`lgan iTEP yani International Test of English
              Proficiency haqida qisqacha ma`lumot bermoqchiman. Post so`ngida esa ajoyib yangilimiz bor.
            </p>
            <p className="text-black mt-8">
              Ushbu imtixon O’zbekiston davlat ta`lim vazirligi tomonidan tasdiqlangan bo`lib, iTEP imtihonidan
              o`tganlarga o`z ingliz tili darajisini ko`rsatib beruvchi sertifikat taqdim qilinadi.
            </p>
            <p className="text-black mt-8">
              Va sertifikat orqali siz nafaqat O’zbekistondagi va balki dunyoning ko`plab nufuzli oliygohlarida
              Bakalavr, Magistratura va Doctorantura bosqichlariga o`qishga qabul qilinishingiz mumkin.
            </p>
            <p className="text-black mt-8">
              Faqatgina bu emas, balki hozirda maktab va universitetlarda o`z faoliyatlarini yuritib kelayotgan
              uqituvchilarimiz iTEP sertificatini qo`lga kiritish orqali, oylik maoshlariga qushimcha 50% gacha ustama
              ish haqqi olishlari mumkin.
            </p>
            <p className="text-black mt-8">
              Tabiiyki sizda ushu imtihon haqida turli xil savollar bulishi mumkin, shu uchun keling hozir sizlarga iTEP
              haqida 5 kerakli malumotlar sanab o`taman.
            </p>
            <ol className="list-decimal list-inside mt-8 space-y-2">
              <li>
                Test topshirish narxining arzonligida.
              </li>
              <li>
                Test atigi 90 daqiqa davom etadi.
              </li>
              <li>
                Test natijangizni tez chiqishi.
              </li>
              <li>
                Test to`liq online shaklda o`tkaziladi.
              </li>
              <li>
                iTEP imtixoni sizni 5 bosqichda grammar, listening, reading, writing, va speaking dan ingliz tili
                darajangizni tekshirib beradi.
              </li>
            </ol>
            <p className="text-black mt-8">
              Endi esa siz uchun ajoyib yangilimiz bor.
            </p>
            <p className="text-black mt-8">
              Agarda siz iTEP imtihonidan a’lo baholar bilan o’tmoqchi bo`lsangiz English Campus o`quv markazi bu borada
              sizga yordam berishga tayyor.
            </p>
            <p className="text-black mt-8">
              Endilikda bizning o`quv markazda siz nafaqat iTEP imtixonini topshirish balki iTEP kurslarimizga qatnashib
              iTEP imtixoni haqida kerakli bilim va ko`nikmalarga bo`lib, undan yuqori ballar bilan o`tishingiz mumkin.
            </p>
            <p className="text-black mt-8">
              Shuyerda bir muhim malumotni sizga aytib o`tmoqchimiz: Ushbu kurs sizga shunchaki iTEP imtixoni haqida
              ma`lumot berish yoki testda sizlarni nimalar kutishi haqida bo`libgina qolmay, balki iTEP tomonidan ishlab
              chiqilgan o`quv kitoblari orqali sizning Grammar, Listening, Reading, Writing, va Speaking dagi
              darajangizni oshirib berishda katta yordam beradi.
            </p>
            <p className="text-black mt-8">
              Kursning eng katta avfzalligi esa uning online va offline shaklda bo`lishidir.
            </p>
            <p className="text-black mt-8">
              Yani siz o`quv markazimizga tashrif buyurib darslarni offline tarzda yoki masofadan turib online tarzda
              siz uchun qulay bo`lgan joyda olishingiz mumkin. Bu albatta sizga vaqtingiz va mablag’ingizni tejashda
              yordam beradi.
            </p>
            <p className="text-black mt-8">
              Kurs haqida batafsil ma`lumotga ega bo`lish uchun o`quv markazimiz raqamlariga qo`ngiroq qilishingiz
              mumkin.
            </p>
            <Link href="https://t.me/itepofficialuzb">
              <div
                className="mx-10 mt-20 flex h-16 w-full cursor-pointer items-center justify-center
                rounded-full bg-gradient-to-r from-gradientStart to-gradientFinish lg:mt-40 xl:mt-24"
              >
                <p className="mr-3 text-base tracking-widest text-white">
                  Batafsil malumot olish uchun
                </p>
                <div className="rounded-full bg-red bg-gradient-to-r from-red to-gradientFinish">
                  <NextIcon/>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
