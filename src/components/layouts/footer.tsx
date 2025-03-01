"use client"
import Image from "next/image";
import Logo from "../../../public/imgLogo/icon.png"

function Footer() {
  return (
    <footer className="flex justify-around items-center gap-4 text-base-content p-4 py-4 bg-biruSMKPK">
      <div>
        <Image src={Logo} alt="logo" className="w-[6rem] md:w-[5rem]"></Image>
      </div>
      <div>
        <p className="text-sm md:text-md text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by Riko Fernanda Saputra
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-4">
      <i className='bx bxl-instagram bx-sm md:bx-md'></i>
      <i className='bx bxl-facebook-square bx-sm md:bx-md'></i>
      <i className='bx bxl-youtube bx-sm md:bx-md' ></i>
      </div>
    </footer>
  );
}

export default Footer;
