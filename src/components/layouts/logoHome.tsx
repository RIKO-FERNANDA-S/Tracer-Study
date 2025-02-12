import React from "react";
import Image from "next/image";
import LogoMawa1 from "../../../public/imgLogo/mawa1.png";
import LogoMawa2 from "../../../public/imgLogo/smk2.png";
import SMKPK from "../../../public/imgLogo/smkpk.png";
import SMKBisa from "../../../public/imgLogo/smkbisa.png";
import SMA from "../../../public/imgLogo/sma.png";
import SMADoubleTrack from "../../../public/imgLogo/smadoubletrack.png";
import Lokasi from "../../../public/imgLogo/lokasi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function LogoHome() {
  return (
    <main className="w-full h-36 py-5 px-7 bg-biruMawa2">
      <Swiper
      modules={[Autoplay]}
      autoplay={{delay: 0}}
      loop={true}
      slidesPerView={6}
      speed={2000}
      breakpoints={{
        300: {slidesPerView: 3},
        600: {slidesPerView: 6}
      }}
      className="flex items-center justify-center h-full gap-10"
      >
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center">
          <Image src={LogoMawa1} alt="mawa1" className="w-24 h-auto "></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center">
          <Image src={Lokasi} alt="mawa1" className="w-auto h-24"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center items-center h-full">
          <Image src={LogoMawa2} alt="mawa1" className="w-24 h-auto"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center items-center h-full">
          <Image src={SMKBisa} alt="mawa1" className="w-auto h-16"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center items-center h-full">
          <Image src={SMA} alt="mawa1" className="w-20 h-auto"></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center items-center h-full">
          <Image
            src={SMADoubleTrack}
            alt="mawa1"
            className="w-auto h-24"
          ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-28 h-full">
          <div className="w-full flex justify-center items-center h-full">
          <Image src={SMKPK} alt="mawa1" className="w-24 h-auto"></Image>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </main>
  );
}

export default LogoHome;
