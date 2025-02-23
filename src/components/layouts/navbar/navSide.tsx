"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/imgLogo/mawalogox-1536x300.png";
import { usePathname } from "next/navigation";


function Navside() {
  const pathnmae = usePathname();


  return (
    <main className="h-screen flex flex-col gap-10 py-5 sticky w-1/5 bg-gray-50 text-black border-r-2 border-black overflow-scroll scrollbar-none ">
      <Link href="/" className="w-full flex justify-center ">
        <Image src={Logo} alt="logo" className="h-auto w-64"></Image>
      </Link>

      <div className="flex flex-col px-5 gap-8 mt-24 h-max">
        <Link href="/dashboard" className=" cursor-pointer">
          <div
            className={`py-2 px-3 flex items-center ${
              pathnmae === "/dashboard" ? "bg-sky-100" : "bg-transparent"
            }`}
          >
            <i className="bx bxs-home bx-sm"></i>
            <h1 className="text-lg ml-2 font-medium ">Dashboard</h1>
          </div>
        </Link>

          <Link href="/dashboard/siswa"  className={`flex items-center cursor-pointer py-2 px-3 ${
            pathnmae === "/dashboard/siswa" ? "bg-sky-100" : "bg-transparent"
          }`}>
            <i className="bx bx-data bx-sm"></i>
            <h1 className="text-lg ml-2 font-medium">Data</h1>
          </Link>

         
        
        <Link
          href="/dashboard/recap"
          className={`flex items-center cursor-pointer py-2 px-3 ${
            pathnmae === "/dashboard/recap" ? "bg-sky-100" : "bg-transparent"
          }`}
        >
          <i className="bx bx-download bx-sm"></i>
          <h1 className="text-lg ml-2 font-medium">Recap</h1>
        </Link>
      </div>
{/* 
      <div className="flex">
        <h1 className="flex justify-start gap-3 mt-7">© 2025 Riko. Hak cipta dilindungi.</h1>
      </div> */}

    
    </main>
  );
}

export default Navside;
