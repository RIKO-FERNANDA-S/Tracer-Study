
import React from "react";
import Image from "next/image";
import Logo from "../../../public/imgLogo/mawalogox-1536x300.png";
import Link from "next/link";
import { signOutCredentials } from "@/lib/action";


function Navbar() {
  return (
    <main className="w-full h-max flex justify-center border-b-[1px] border-black">
      <nav className="w-full flex items-center justify-between py-3 px-8">
        <Link href="/" className="mr-14">
          <Image src={Logo} alt="logo" className="w-80"></Image>
        </Link>

        <div className="flex items-center gap-5 font-poppins">
          <div onClick={signOutCredentials} className="flex w-max gap-4 outline cursor-pointer text-red-500 justify-center rounded-full p-2 items-center outline-2 outline-red-500 ">
              <i className='bx bx-log-out-circle bx-sm mr-[.5]'></i>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
