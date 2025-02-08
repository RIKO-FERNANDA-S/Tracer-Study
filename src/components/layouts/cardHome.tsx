import React from 'react'
import Image from 'next/image'
import Foto1 from "../../../public/img/1.png"
import Foto2 from "../../../public/img/13.png"
import Foto3 from "../../../public/img/14.png"
import Link from 'next/link'

function CardHome() {
  return (
    <main className='flex flex-col w-full h-screen' id='jejakKarir'>
        <section className='w-full flex justify-center mt-36'>
            <h1 className='text-5xl'>Jejak Karir SMK-SMA Darma Siswa </h1>
        </section>
        <section className='w-full h-72 mt-20 gap-7 flex flex-wrap justify-center items-center'>
            <div className='flex items-end h-[80%]'>
                <div className='bg-gray-200 w-[29rem] h-56 relative rounded-xl'></div>
                <div className='flex absolute items-end pl-1'>
                <Image src={Foto1} width={200} alt="Foto"></Image>
                <div className='flex flex-col justify-center gap-4 mb-6 ml-4 h-full'>
                    <h1 className='text-xl font-semibold font-Poppins'>Riko Fernanda S.</h1>
                    <p className='w-64 font-light font-Lora'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam alias?"</p>
                    <Link href="" className='bg-kuningMawa1 text-white py-2 px-3 w-max rounded-[.5rem]'>Kunjungi MEDSOS</Link>
                </div>
                </div>
            </div>
            <div className='flex items-end h-[80%]'>
                <div className='bg-gray-200 w-[29rem] h-56 relative rounded-xl'></div>
                <div className='flex absolute items-end pl-1'>
                <Image src={Foto2} width={200} alt="Foto" ></Image>
                <div className='flex flex-col justify-center gap-4 mb-6 ml-4 h-full'>
                    <h1 className='text-xl font-semibold font-Poppins'>M. Novan Ardiansyah</h1>
                    <p className='w-64 font-light font-Lora'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam alias?"</p>
                    <Link href="" className='bg-kuningMawa1 text-white py-2 px-3 w-max rounded-[.5rem]'>Kunjungi MEDSOS</Link>
                </div>
                </div>
            </div>
            <div className='flex items-end h-[80%]'>
                <div className='bg-gray-200 w-[29rem] h-56 relative rounded-xl'></div>
                <div className='flex absolute items-end pl-1'>
                <Image src={Foto3} width={160} alt="Foto"></Image>
                <div className='flex flex-col justify-center gap-4 mb-6 ml-4 h-full'>
                    <h1 className='text-xl font-semibold font-Poppins'>Kayla Putri A.</h1>
                    <p className='w-64 font-light font-Lora'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, aliquam alias?"</p>
                    <Link href="" className='bg-kuningMawa1 text-white py-2 px-3 w-max rounded-[.5rem]'>Kunjungi MEDSOS</Link>
                </div>
                </div>
            </div>
        </section>

    </main>
  )
}

export default CardHome