"use client";
import React from "react";
import ImgLocation from "../../../public/imgContact/Screenshot 2025-02-20 100616.png";
import Image from "next/image";

function Kontak() {
  return (
    <main id="kontak" className="h-max w-full px-5 md:px-0 md:py-20 ">
      <div className="flex h-screen w-full bg-green-200 justify-center py-5 px-5 gap-5">
        <section  className="w-[30%] h-full bg-yellow-200">
          
        </section>
        <section  className="w-[80%] flex h-full justify-end bg-yellow-200">
          <div className="flex relative h-max w-max">
        <Image src={ImgLocation} alt="location" className="w-auto h-auto"></Image>
          </div>
        <div className="w-max bg-gray-300 flex absolute h-full">
          a
        </div>
        
       
        </section>





        {/* <section className="w-full md:w-[20%] flex flex-col h-full justify-center text-center sm:text-start gap-10">
          <div className="flex flex-col justify-center w-full ">
            <div className="mb-3">
              <h2 className="text-xl font-medium">Contact us</h2>
              <h1 className="text-5xl font-semibold">Get In Touch</h1>
            </div>
            <h3 className="text-xl">
              Jika Anda memiliki pertanyaan atau memerlukan bantuan terkait
              Tracer Study, jangan ragu untuk menghubungi kami.
            </h3>
          </div>
          <div className="flex flex-col justify-center md:gap-1">
            <div className="flex flex-col w-full p-3 gap-3">
              <h2 className="text-xl font-bold">Phone</h2>
              <div className="flex flex-col sm:flex-row gap-5  items-center">
                <i className="bx bx-phone bx-lg "></i>
                <div className="flex flex-col">
                  <h2 className="text-lg mb-2">MAWA 1 : 031-8672377</h2>
                  <h2 className="text-lg">MAWA 2 : 031-8678854</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full p-3 gap-3">
              <h2 className="text-xl  font-bold">Email</h2>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <i className="bx bx-envelope bx-lg "></i>
                <div className="flex flex-col ">
                  <h2 className="text-lg mb-2">
                    smkdarmasiswa1sidoarjo@gmail.com
                  </h2>
                  <h2 className="text-lg">smkdarmasiswa2sidoarjo@gmail.com</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-3 w-full gap-3">
              <h2 className="text-xl  font-bold">Alamat</h2>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <i className="bx bx-map-alt bx-lg"></i>
                <h2 className="text-lg">
                  Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru,
                  Kabupaten Sidoarjo, Jawa Timur 61256
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex md:w-[70%] h-full">
          <div className=" flex absolute">
            <Image src={ImgLocation} alt="imgLocation" />
          </div>
          <div className="relative bg-kuningMawa1 h-full w-[70%]">
            <div>

            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}

export default Kontak;
