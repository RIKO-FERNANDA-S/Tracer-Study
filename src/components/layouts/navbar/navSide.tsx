"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/imgLogo/mawalogox-1536x300.png";
import { usePathname } from "next/navigation";
import Pp from "../../../../public/imgLogo/user.jpg";
import { signOutCredentials } from "@/lib/action";
import { useSession } from "next-auth/react";

function Navside() {
  const pathnmae = usePathname();
  const {data: session} = useSession()

  return (
    <main className="h-screen flex flex-col py-5 sticky w-1/5 bg-gray-50 text-black border-r-2 border-black overflow-scroll scrollbar-none justify-between">
      <Link href="/" className="w-full flex justify-center ">
        <Image src={Logo} alt="logo" className="h-auto w-64"></Image>
      </Link>

      <div className="flex flex-col px-5 gap-5">
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

        <div className="py-2 px-3 flex flex-col">
          <div className="flex items-center">
            <i className="bx bx-data bx-sm"></i>
            <h1 className="text-lg ml-2 font-medium">Data</h1>
          </div>
          <div className="ml-4 flex justify-self-center gap-2 flex-col mt-2">
            <div className="collapse collapse-arrow ">
              <input type="checkbox" />
              <h1 className="collapse-title text-md font-normal ">
                SMK MAWA 1
              </h1>
              <ul className="collapse-content flex flex-col gap-2 list-disc">
                <Link href="/dashboard/mawa1/kelas/tkjt">
                  <li className="mx-1 cursor-pointer">
                    Teknik Komputer dan jaringan
                  </li>
                </Link>
                <Link href="/dashboard/mawa1/kelas/tkr">
                  <li className="mx-1 cursor-pointer">
                    Teknik Kendaraan Ringan
                  </li>
                </Link>
                <Link href="/dashboard/mawa1/kelas/tbsm">
                <li className="mx-1 cursor-pointer">
                  Teknik Bisnis Sepeda Motor
                </li>
                </Link>
                <Link href="/dashboard/mawa1/kelas/tp">
                <li className="mx-1 cursor-pointer">Teknik Permesinan</li>
                </Link>
              </ul>
            </div>
            <div className="collapse collapse-arrow ">
              <input type="checkbox" />
              <h1 className="collapse-title text-md font-normal ">
                SMK MAWA 2
              </h1>
              <ul className="collapse-content flex flex-col gap-2 list-disc">
                <Link href="/dashboard/mawa2/kelas/akl">
                <li className="mx-1 cursor-pointer">Akutansi</li>
                </Link>
                <Link href="/dashboard/mawa2/kelas/mp">
                <li className="mx-1 cursor-pointer">Menejemen Perkantoran</li>
                </Link>
                <Link href="/dashboard/mawa2/kelas/dkv">
                <li className="mx-1 cursor-pointer">
                  Desain Komunikasi Visual
                </li>
                </Link>
                <Link href="/dashboard/mawa2/kelas/lpkkk">
                <li className="mx-1 cursor-pointer">
                  Layanan Penunjang Kefarmasian Klinis dan Komunitas
                </li>
                </Link>
                
              </ul>
            </div>
            <div className=" ">
              
              <Link href="/dashboard/smaplus/sma">
              <h1 className="collapse-title text-md font-normal ">SMA MAWA</h1>
              </Link>
            </div>
          </div>
        </div>
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

      <div className="w-full h-max px-5 mt-5">
        <div className="w-full flex flex-col gap-8">
          <div onClick={signOutCredentials} className="w-full h-max cursor-pointer flex gap-5 items-center">
          <i className='bx bx-log-out bx-sm'></i>
          <h1 className="text-xl">Logout</h1>
          </div>
          
          <div>
            <div className="flex gap-3 items-center">
              <Image src={Pp} alt="profil" className="w-12 rounded-full"></Image>
              <div className="">
                <h1 className="text-md font-medium capitalize">{session?.user.name}</h1>
                <h1 className="text-sm font-light lowercase text-wrap">{session?.user.email}</h1>
              </div>
            </div>
          <h1></h1>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Navside;
