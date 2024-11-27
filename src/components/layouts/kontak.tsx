"use client";
import React from "react";
import Image from "next/image";
import Img from "../../../public/imgHome/hero.png";

function Kontak() {
  return (
    <main id="kontak" className="h-max w-full  px-10 py-4 ">
      <div className="flex h-full w-full justify-center items-center py-5 gap-14">
        <section className="w-2/5 h-full">
          <form className="bg-slate-400 h-full p-10">
            <div>
              <h2 className="text-xl font-medium">Contact us</h2>
              <h1 className="text-5xl font-semibold">Get In Touch</h1>
            </div>
            <div className="flex flex-col gap-5 mt-6">
              <div className="flex flex-col  gap-2">
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name..."
                  className="outline-lime-600 outline-2 rounded-sm text-base p-2 active:outline-none "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@youremail.com"
                  className="outline-lime-600 outline-2 rounded-sm text-lg p-2"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="tittle" className="text-lg">
                  Title
                </label>
                <input
                  type="text"
                  id="tittle"
                  name="tittle"
                  required
                  placeholder="Tittle...."
                  className="outline-lime-600 outline-2 rounded-sm text-lg p-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message..."
                  className="outline-lime-600 outline-2 rounded-sm text-lg p-2"
                ></textarea>
              </div>
            </div>
            <button className="w-full btn btn-primary mt-7 text-lg">
              Kirim Pesan{" "}
            </button>
          </form>
        </section>
        <section className="w-2/5 flex flex-col h-full justify-center gap-16">
          <div className="flex justify-center w-full items-center">
            <h3 className="text-xl">
              Jika Anda memiliki pertanyaan, masukan, atau memerlukan bantuan
              terkait Tracer Study, jangan ragu untuk menghubungi kami. Tim kami
              siap membantu Anda dengan sepenuh hati untuk memastikan pengalaman
              Anda bersama kami berjalan lancar.
            </h3>
          </div>
          <div className="flex flex-col text-center justify-center gap-5">
            <div className="flex w-full gap-5">
              <div className="flex flex-col items-center bg-sky-200 rounded-lg w-1/2 p-6">
                <i className="bx bx-phone bx-lg mb-3"></i>
                <h2 className="text-xl  font-bold">Phone</h2>
                <h2 className="text-lg">(031) 8672377</h2>
              </div>
              <div className="flex flex-col items-center bg-sky-200 rounded-lg w-1/2 p-6">
                <i className="bx bx-envelope bx-lg mb-3"></i>
                <h2 className="text-xl  font-bold">Email</h2>
                <h2 className="text-lg">info@kantor.com</h2>
              </div>
            </div>
            <div className="flex flex-col items-center bg-sky-200 rounded-lg p-5">
              <i className="bx bx-map-alt bx-lg mb-3"></i>
              <h2 className="text-xl  font-bold">Alamat</h2>
              <h2 className="text-lg">
                Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru, Kabupaten
                Sidoarjo, Jawa Timur 61256
              </h2>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Kontak;
