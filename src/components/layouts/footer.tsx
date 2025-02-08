"use client"
import Image from "next/image";
import Logo from "../../../public/imgLogo/icon.png"

function Footer() {
  return (
    <footer className="flex justify-around items-center text-base-content p-4 py-4 bg-gray-900">
      <div>
        <Image src={Logo} alt="logo" className="w-[5rem]"></Image>
      </div>
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Riko Fernanda Saputra
        </p>
      </div>
      <div className="flex gap-4">
      <i className='bx bxl-instagram bx-md'></i>
      <i className='bx bxl-facebook-square bx-md'></i>
      <i className='bx bxl-youtube bx-md' ></i>
      </div>
    </footer>
  );
}

export default Footer;
