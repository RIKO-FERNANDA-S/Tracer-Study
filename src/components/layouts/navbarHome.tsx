"use client"
import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/imgLogo/mawalogox-1536x300.png"
import Link from 'next/link'

function Navbar() {
  return (
    <main className='w-full h-max flex justify-center '>
    <nav className='w-max flex items-center justify-between p-3 bg-[#f7f9ff] mt-5 rounded-lg z-10 fixed shadow-xl px-6'>
        <Link href="/" className='mr-36'>
        <Image src={Logo} alt='logo' className='w-80'></Image>
        </Link>

        <div className='flex items-center gap-10 font-poppins'>
            <div className='flex items-center justify-center gap-6 text-lg font-normal w-max '>
                <Link href="#beranda" id='home'>
                <h1>Beranda</h1>
                </Link>
                <Link href="#tentang" >
                <h1>Tentang</h1>
                </Link>
                <Link href="#kontak" >Kontak</Link>
            </div>
            <div className='flex w-max gap-4 text-md items-center '>
              <Link href="/login" className='py-2 px-4 '>Login</Link>
              <Link href="/register" className='py-2 px-4 rounded-lg bg-blue-400 text-white'>Sign Up</Link>
            </div>
        </div>
    </nav>
    </main>
  )
}

export default Navbar