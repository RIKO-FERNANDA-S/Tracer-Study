import React from 'react'
import Image from 'next/image'
import Foto1 from "../../../public/img/peopple/3.png"
import Foto2 from "../../../public/img/peopple/4.png"
import Foto3 from "../../../public/img/peopple/5.png"
import Quote from "../../../public/img/icons/1-removebg-preview.png"


function CardHome() {
  return (
    <main className='hidden md:flex flex-col w-full h-screen ' id='jejakKarir'>
        <section className='w-full flex justify-center flex-col text-center mt-20'>
            <h1 className='text-3xl md:text-6xl uppercase text-biruMawa2 font-bold'>Jejak Karir</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa corrupti nihil reiciendis ipsum. Corrupti, autem. Est,</p>
        </section>
        <section className='w-full h-72 mt-36 md:mt-28 flex  justify-center items-center'>

            <div className='w-[90%] text-black gap-10 xl:gap-[4.5rem] justify-around flex flex-wrap'>
            <div className='flex items-end h-[80%] '>
                <div className='bg-white w-[21rem] shadow-[10px_10px_30px_-12px_#1E37A1] h-56 relative rounded-3xl p-10 border-2 border-kuningMawa1'>
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
                        <Image src={Foto1} alt='foto1' className='w-32 rounded-full outline-[.5rem] hover:shadow-[10px_10px_60px_-20px_#1E37A1]'></Image>
                    </div>
                </div>
            </div>
            <div className='flex items-end h-[80%]'>
                <div className='bg-white w-[21rem] shadow-[10px_10px_30px_-12px_#1E37A1] h-56 relative rounded-3xl p-10 border-2 border-kuningMawa1'>
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
                        <Image src={Foto2} alt='foto1' className='w-32 rounded-full outline-[.5rem] hover:shadow-[10px_10px_60px_-20px_#1E37A1]'></Image>
                    </div>
                </div>
            </div>
            <div className='flex items-end h-[80%]'>
                <div className='bg-white w-[21rem] shadow-[10px_10px_30px_-12px_#1E37A1] h-56 relative rounded-3xl p-10 border-2 border-kuningMawa1'>
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
                        <Image src={Foto3} alt='foto1' className='w-32 rounded-full outline-[.5rem] hover:shadow-[10px_10px_60px_-20px_#1E37A1]'></Image>
                    </div>
                </div>
            </div>
            </div>
  
        </section>

    </main>
  )
}

export default CardHome