"use client"
import Image from "next/image";
import Img1 from "../../../public/img/img1.jpg";
import Img2 from "../../../public/img/img2.jpg";
import Img3 from "../../../public/img/img3.jpg";
import Link from "next/link";

function Tentang() {
  return (
    <main
      id="tentang"
      className="h-screen flex flex-wrap justify-center items-center w-full "
    >
      <section className="w-full md:w-1/2 flex flex-col items-center gap-3">
        <div className=" w-full flex justify-center gap-3">
          <div className="w-[32%]">
            <Image src={Img1} alt="img1" className="w-full rounded-lg"></Image>
          </div>
          <div className="w-[32%]">
            <Image src={Img2} alt="img2" className="w-full rounded-lg"></Image>
          </div>
        </div>
        <div className="w-[65%] bg-slate-100">
          <Image src={Img3} alt="img3" className="w-full rounded-lg"></Image>
        </div>
      </section>

      <section className="w-full md:w-1/2 md:pr-20 flex flex-col gap-10 px-5  text-justify">
      <h1 className="text-6xl mb-2 font-bold uppercase text-biruMawa2">Tentang Kami</h1>
      <article className="flex flex-col gap-4">
        <h3 className="text-lg md:text-lg font-semibold leading-relaxed ">
          Bergabung dalam tracer study memberikan kesempatan bagi kami untuk
          mendengar langsung dari alumni tentang pengalaman mereka.
        </h3>
        <h3 className="text-md">
          Kami percaya bahwa setiap alumni adalah duta sekolah yang membawa
          nilai dan semangat almamater ke berbagai penjuru dunia. Melalui tracer
          study, kami juga berharap dapat membangun koneksi yang lebih erat
          antara alumni dan institusi, menciptakan peluang kolaborasi, dan
          memberikan inspirasi kepada generasi berikutnya.
        </h3>
      </article>
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <Link
              href="https://www.smkdarmasiswasidoarjo.sch.id/index.php/visi-misi/"
              className="bg-biruMawa2 rounded-full flex items-center justify-center btn-circle px-2 text-lg"
            >
              <i className="bx bx-right-top-arrow-circle bx-md text-white"></i>
            </Link>
            <p>Informasi Lebih Lanjut</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Tentang;
