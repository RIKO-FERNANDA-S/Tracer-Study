"use client";
import Image from "next/image";
import Link from "next/link";
import imgHero from "../../../public/img/2.png";
import dynamic from "next/dynamic";
import LogoHome from "./logoHome";


const CardHome = dynamic(() => import('@/components/layouts/cardHome'))

const Tentang = dynamic(() => import('@/components/layouts/tentang'), {
  ssr: false,
});
const Kontak = dynamic(() => import('@/components/layouts/kontak'), {
  ssr: false,
});
const Footer = dynamic(() => import('@/components/layouts/footer'), {
  ssr: false,
});

function Hero() {
  return (
    <main className="font-poppins mt-10 md:mt-0">
      <section
        className="w-full h-max justify-center flex flex-col"
        id='#beranda'
      >
        <div className=" flex justify-center md:justify-between w-full h-[89vh] px-10 md:px-8 items-center ">
          <div className="justify-start flex flex-col p-9 absolute z-10 w-full h-full mt-40 md:mt-72 md:w-1/2 md:ml-6">
            <p className=" text-lg md:text-xl mb-1 md:mb-4">Tracer Study MAWA</p>
            <h1
              className="text-4xl xl:text-5xl text-wrap font-bold font-Lora"
            >
              Jelajahi Jejak Alumni, Bangun Masa Depan!
            </h1>
            <p className="mt-4 mb-2 md:mb-6 text-lg md:text-xl  font-normal font-Lora md:w-[80%] xl:w-[90%]">
              Temukan data dan kisah sukses alumni SMK-SMA Darma Siswa.
              Bersama, kita membangun jaringan yang lebih kuat untuk generasi
              mendatang.
            </p>

            <div className="flex gap-5 flex-wrap mt-4 md:mt-0">
              <Link
                href="/form"
                className="bg-[#FFC107] items-center py-2 flex px-4 rounded-[.3rem] text-lg text-white"
              >
                Yuk Isi Survey
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.smkdarmasiswasidoarjo.sch.id/"
                  className=" bg-[#FFC107] p-1 flex items-center justify-center rounded-full text-lg text-white"
                >
                  <i className="bx bx-right-top-arrow-circle bx-md"></i>
                </Link>
                <p>Visit Website SMK MAWA</p>
              </div>
            </div>
          </div>

          <div className="h-full w-full  hidden md:flex justify-end relative items-end bottom-0">
            <Image src={imgHero} alt="" className=" w-auto h-[30rem]"></Image>
          </div>
        </div>
        <LogoHome/>
      </section>

      <Tentang />
      <CardHome/>
      <Kontak />
      <Footer />
    </main>
  );
}

export default Hero;
