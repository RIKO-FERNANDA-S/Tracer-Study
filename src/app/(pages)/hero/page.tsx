import Image from "next/image";
import Link from "next/link";
import bgHero from "../../../../public/img/hero.jpg";
import imgHero from "../../../../public/img/1.png";
import Navbar from "@/components/layouts/navbarHome";
import Tentang from "@/components/layouts/tentang";
import Kontak from "@/components/layouts/kontak";
import Footer from "@/components/layouts/footer";

// const Tentang = dynamic(() => import('./tentang'), {ssr: false})
// const Kontak = dynamic(() => import('./kontak'), {ssr: false})
// const Footer = dynamic(() => import('./footer'), {ssr: false})

async function Hero() {
  return (
    <main className="font-poppins">
      <Navbar/>
      <section className="w-full h-screen justify-center flex flex-col " id="#beranda">
        <Image
          src={bgHero}
          alt="bg"
          className="relative w-full h-screen opacity-25"
        ></Image>
        <div className="absolute flex justify-center w-full h-full">
          <div className="justify-center flex flex-col w-1/2">
            <p className="text-xl mb-4">Tracer Study MAWA</p>
            <h1 className="text-5xl text-wrap font-bold">Berbagi Perjalanan, Membangun Masa Depan!</h1>
            <p className="mt-4 mb-6 text-lg font-extralight">
            Mulai Perjalanan Anda Bersama Kami Hari Ini!
            </p>
            <div className="flex gap-5">
              <Link href="/form" className="btn btn-primary px-10 text-lg">
              Isi Tracer Study
              </Link>
              <div className="flex items-center gap-3">
                <Link href="https://www.smkdarmasiswasidoarjo.sch.id/" className="btn btn-primary btn-circle px-2 text-lg">
                  <i className="bx bx-right-top-arrow-circle bx-md"></i>
                </Link>
                <p>Visit Website SMK MAWA</p>
              </div>
            </div>
          </div>
          <div className="h-full flex justify-center items-end w-max bottom-0">
            <Image src={imgHero} alt="" className=" w-auto h-[30rem]"></Image>
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
