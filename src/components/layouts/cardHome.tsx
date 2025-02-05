import React from 'react'
import Image from 'next/image'
import Foto1 from "../../../public/img/1.png"
import Link from 'next/link'

function CardHome() {
  return (
    <main className='flex flex-col w-full h-screen'>
        <section className='w-full flex justify-center mt-52'>
            <h1 className='text-3xl'>Jejak Karir SMK-SMA Darma Siswa </h1>
        </section>
        <section className='w-full h-72 mt-10 flex justify-center items-center'>
            <div className='flex items-end h-[80%]'>
                <div className='bg-gray-200 w-[34rem] h-56 relative rounded-xl'></div>
                <div className='flex absolute items-center'>
                <Image src={Foto1} width={200} alt="Foto"></Image>
                <div className='flex flex-col justify-center gap-4 mt-6 h-full'>
                    <h1 className='text-xl font-semibold font-Poppins'>Riko Fernanda Saputra</h1>
                    <p className='w-72 font-light font-Lora'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam alias?"</p>
                    <Link href="" className='bg-kuningMawa1 text-white py-2 px-3 w-max rounded-[.5rem]'>Kunjungi MEDSOS</Link>
                </div>
                </div>
            </div>
        </section>

    </main>
  )
}

export default CardHome