import React from 'react'
import Image from 'next/image'
import Foto1 from "../../../public/img/peopple/3.png"
import Foto2 from "../../../public/img/peopple/4.png"
import Foto3 from "../../../public/img/peopple/5.png"
import Quote from "../../../public/img/icons/1-removebg-preview.png"
import Link from 'next/link'

function CardHome() {
  return (
    <main className='hidden md:flex flex-col w-full h-screen' id='jejakKarir'>
        <section className='w-full flex justify-center text-center mt-24'>
            <h1 className='text-3xl md:text-5xl'>Jejak Karir SMK-SMA Darma Siswa </h1>
        </section>
        <section className='w-full h-72 mt-36 md:mt-16 flex  justify-center items-center'>

            <div className='w-[90%] gap-10 xl:gap-[4.5rem] justify-around flex flex-wrap'>
            <div className='flex items-end h-[80%]'>
                <div className='bg-biruMawa2 w-[21rem] shadow-xl h-56 relative rounded-3xl p-10'>
                    <p className='w-48 ml-4 mt-3 font-Lora text-sm'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nulla dolor recusandae culpa vero nihil </p>
                    <div className='mt-7'>
                        <h2 className='font-semibold'>Indira Putri Lestari</h2>
                        <p className='text-sm'>ITS - Teknik Elektro </p>
                    </div>
                </div>
                <div className='flex justify-between absolute items-center pl-1  w-[25rem] h-64'>
                    <div className='h-full ml-3'>
                        <Image src={Quote} alt='icons-quote' className='w-16'></Image>
                    </div>
                    <div className='mt-7'>
                        <Image src={Foto1} alt='foto1' className='w-32 rounded-full outline-[.5rem] outline-white outline'></Image>
                    </div>
                </div>
            </div>
            <div className='flex items-end h-[80%]'>
                <div className='bg-biruMawa2 w-[21rem] shadow-xl h-56 relative rounded-3xl p-10'>
                    <p className='w-48 ml-4 mt-3 font-Lora text-sm'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nulla dolor recusandae culpa vero nihil </p>
                    <div className='mt-7'>
                        <h2 className='font-semibold'>M. Novan Ardiansyah</h2>
                        <p className='text-sm'>PT. Hidari - Managing Leader </p>
                    </div>
                </div>
                <div className='flex justify-between absolute items-center pl-1  w-[25rem] h-64'>
                    <div className='h-full ml-3'>
                        <Image src={Quote} alt='icons-quote' className='w-16'></Image>
                    </div>
                    <div className='mt-7'>
                        <Image src={Foto2} alt='foto1' className='w-32 rounded-full outline-[.5rem] outline-white outline'></Image>
                    </div>
                </div>
            </div>
            <div className='flex items-end h-[80%]'>
                <div className='bg-biruMawa2 w-[21rem] shadow-xl h-56 relative rounded-3xl p-10'>
                    <p className='w-48 ml-4 mt-3 font-Lora text-sm'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint nulla dolor recusandae culpa vero nihil </p>
                    <div className='mt-7'>
                        <h2 className='font-semibold'>M. Iqbal Febriansyah A.</h2>
                        <p className='text-sm'>Businessman - Nutmeg Importer</p>
                    </div>
                </div>
                <div className='flex justify-between absolute items-center pl-1  w-[25rem] h-64'>
                    <div className='h-full ml-3'>
                        <Image src={Quote} alt='icons-quote' className='w-16'></Image>
                    </div>
                    <div className='mt-7'>
                        <Image src={Foto3} alt='foto1' className='w-32 rounded-full outline-[.5rem] outline-white outline'></Image>
                    </div>
                </div>
            </div>
            </div>
  
        </section>

    </main>
  )
}

export default CardHome