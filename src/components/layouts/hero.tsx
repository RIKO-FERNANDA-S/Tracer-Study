"use client"
import Image from "next/image";
import Link from "next/link";
import bgHero from "../../../public/img/hero.jpg";
import imgHero from "../../../public/img/1.png";
import dynamic from "next/dynamic";

const Tentang = dynamic(() => import('@/components/layouts/tentang'), {ssr: false})
const Kontak = dynamic(() => import('@/components/layouts/kontak'), {ssr: false})
const Footer = dynamic(() => import('@/components/layouts/footer'), {ssr: false})

 function Hero() {
  return (
    <main className="font-poppins">
      
      <section className="w-full h-screen justify-center flex flex-col" id="#beranda">
        <Image
          src={bgHero}
          alt="bg"
          className="relative w-full h-screen opacity-25"
        />
        <div className="absolute flex justify-center md:justify-between w-full h-full px-10 md:px-16 items-center ">
          <div className="justify-center flex flex-col w-full md:w-1/2 md:ml-6">
            <p className="text-xl mb-1 md:mb-4">Tracer Study MAWA</p>
            <h1 className="text-5xl text-wrap font-bold">Berbagi Perjalanan, Membangun Masa Depan!</h1>

            <p className="mt-4 mb-2 md:mb-6 text-lg font-extralight">
            Mulai Perjalanan Anda Bersama Kami Hari Ini!
            </p>

            <div className="flex gap-5 flex-wrap">
              <Link href="/form" className="btn btn-primary px-10 text-lg text-white">
              Isi Tracer Study
              </Link>
              <div className="flex items-center gap-3">
                <Link href="https://www.smkdarmasiswasidoarjo.sch.id/" className="btn btn-primary btn-circle px-2 text-lg text-white">
                  <i className="bx bx-right-top-arrow-circle bx-md"></i>
                </Link>
                <p>Visit Website SMK MAWA</p>
              </div>
            </div>
          </div>

          <div className="h-full hidden md:flex justify-center items-end w-max bottom-0">
            <Image src={imgHero} alt="" className=" w-auto h-[40rem]"></Image>
          </div>
        </div>
      </section>
      
        <Tentang />
        <Kontak />
        <Footer />

    </main>
  );
}

export default Hero;
