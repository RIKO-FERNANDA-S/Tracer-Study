"use client";
import React from "react";

function Kontak() {
  return (
    <main id="kontak" className="h-max w-full px-5 md:px-10 md:py-20 " >
      <div className="flex flex-wrap h-full w-full justify-center items-center py-5 gap-14">
        <section className="w-full md:w-2/5 flex flex-col h-full justify-center text-center sm:text-start gap-10">
          <div className="flex flex-col justify-center w-full text-justify">
          <div className="mb-3">
              <h2 className="text-xl font-medium">Contact us</h2>
              <h1 className="text-5xl font-semibold">Get In Touch</h1>
            </div>
            <h3 className="text-xl">
              Jika Anda memiliki pertanyaan atau memerlukan bantuan
              terkait Tracer Study, jangan ragu untuk menghubungi kami.
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
                <h2 className="text-lg mb-2">smkdarmasiswa1sidoarjo@gmail.com</h2>
                <h2 className="text-lg">smkdarmasiswa2sidoarjo@gmail.com</h2>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-3 w-full gap-3">
              <h2 className="text-xl  font-bold">Alamat</h2>
              <div className="flex flex-col sm:flex-row gap-5 items-center">
              <i className="bx bx-map-alt bx-lg"></i>
              <h2 className="text-lg">
                Jl. Wijaya Kusuma No.9 - 11, Bebek, Berbek, Kec. Waru, Kabupaten
                Sidoarjo, Jawa Timur 61256
              </h2>
              </div>
            </div>

          </div>
        </section>

        <section className="w-full md:w-2/5 h-full">
          <form className="bg-slate-400 h-full p-10">

            <div className="flex flex-col gap-5 mt-6">
              <div className="flex flex-wrap justify-between gap-5">

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name..."
                  className="outline-lime-600 outline-2 bg-white rounded-sm text-base p-2 focus:rounded-none "
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
                  className="outline-lime-600 outline-2 bg-white rounded-sm text-lg p-2"
                />
              </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <label htmlFor="tittle" className="text-lg">
                 Nomor Telpon
                </label>
                <input
                  type="text"
                  id="tittle"
                  name="tittle"
                  required
                  placeholder="Tittle...."
                  className="outline-lime-600 outline-2 bg-white rounded-sm text-lg p-2"
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
                  className="outline-lime-600 outline-2 bg-white rounded-sm text-lg p-2"
                ></textarea>
              </div>
            </div>
            <button className="w-full btn btn-primary mt-7 text-lg text-white">
              Kirim Pesan
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Kontak;
