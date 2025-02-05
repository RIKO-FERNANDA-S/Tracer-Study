"use client";
import Image from "next/image";
import Link from "next/link";
import bgHero from "../../../public/img/hero.jpg";
import imgHero from "../../../public/img/2.png";
import dynamic from "next/dynamic";
import LogoHome from "./logoHome";
import CardHome from "./cardHome";

const Tentang = dynamic(() => import("@/components/layouts/tentang"), {
  ssr: false,
});
const Kontak = dynamic(() => import("@/components/layouts/kontak"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/layouts/footer"), {
  ssr: false,
});

function Hero() {
  return (
    <main className="font-poppins">
      <section
        className="w-full h-max justify-center flex flex-col"
        id="#beranda"
      >
        <div className=" flex justify-center md:justify-between w-full h-[89vh] px-10 md:px-8 items-center ">
          <div className="justify-start flex flex-col absolute z-10 w-full h-full mt-80 md:w-1/2 md:ml-6">
            <p className="text-xl mb-1 md:mb-4">Tracer Study MAWA</p>
            <h1
              className="text-6xl text-wrap font-bold font-Lora"
            >
              Jelajahi Jejak Alumni, Bangun Masa Depan!
            </h1>
            <p className="mt-4 mb-2 md:mb-6 text-xl font-normal font-Lora w-[80%]">
              "Temukan data dan kisah sukses alumni SMK-SMA Darma Siswa.
              Bersama, kita membangun jaringan yang lebih kuat untuk generasi
              mendatang."
            </p>

            <div className="flex gap-5 flex-wrap">
              <Link
                href="/form"
                className="bg-[#FFC107] items-center flex px-4 rounded-[.3rem] text-lg text-white"
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
            <Image src={imgHero} alt="" className=" w-auto h-[35rem]"></Image>
          </div>
        </div>
        <LogoHome/>
      </section>

      <CardHome/>
      <Tentang />
      <Kontak />
      <Footer />
    </main>
  );
}

export default Hero;
