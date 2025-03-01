"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import img from "../../../public/imgLogo/icon.png"

const Footer = dynamic(() => import('@/components/layouts/footer'), {
  ssr: false,
});

function Hero() {
  return (
    <main className="font-poppins md:mt-0 h-max w-full bg-bgAbout2 brightness-90 bg-cover bg-no-repeat text-white">
      <section
        className="w-full h-screen justify-center flex flex-col"
        id='#beranda'
      >
        <div className=" flex justify-center md:justify-between w-full h-screen items-center ">
          <div className="justify-start flex flex-col p-9 absolute z-10 w-full h-max mt-10 md:pt-12 md:w-2/3 md:ml-6 md:px-8 px-10">
          <div className="backdrop-blur-[2px] rounded-[.5rem] w-full p-8 h-max">
          <div className=" text-sm md:text-xl mb-1 md:mb-4 flex items-center gap-5"><Image src={img} alt="gambar" className="w-12"></Image>Tracer Study SMK-SMA Plus Darma Siswa </div>
            <h1
              className="text-3xl md:text-5xl text-wrap font-bold font-Lora"
            >
              Jelajahi Jejak Alumni, Bangun Masa Depan!
            </h1>
            <p className="mt-4 mb-2 md:mb-6 text-sm md:text-xl font-normal font-Lora md:w-[80%] xl:w-[90%]">
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
              <div className="hidden md:flex items-center gap-3">
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
          </div>

          <div className="h-full w-full  bg-bgHome bg-cover brightness-75 bg-no-repeat">
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Hero;
