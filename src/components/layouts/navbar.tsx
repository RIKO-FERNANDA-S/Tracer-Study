"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/imgLogo/mawalogox-1536x300.png";
import Link from "next/link";

function Navbar() {
  return (
    <main className="w-full h-max flex justify-center ">
      <nav className="w-full flex items-center justify-between p-3">
        <Link href="/" className="mr-14">
          <Image src={Logo} alt="logo" className="w-80"></Image>
        </Link>

        <div className="flex items-center gap-5 font-poppins">
          <div className="flex w-max gap-4 text-md items-center ">
            <Link
              href="/"
              className="px-6 py-3 text-white rounded-full bg-red-500"
            >
              <i className="bx bx-log-out"></i> Log out
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
