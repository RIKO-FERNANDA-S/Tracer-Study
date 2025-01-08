"use client";
import { signOutCredentials } from "@/lib/action";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "../../../public/imgLogo/icon.png";
import Logo from "../../../public/imgLogo/mawalogox-1536x300.png";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="w-full h-max flex justify-center ">
      <nav className="w-max hidden md:flex items-center justify-between p-3 bg-[#f7f9ff] mt-5 rounded-lg z-10 fixed shadow-xl px-6 gap-56">
        <Link href="/" className="">
          <Image src={Logo} alt="logo" className="w-80"></Image>
        </Link>

        <div className="flex items-center gap-11 font-poppins">
          <div className="flex items-center justify-center gap-6 text-base font-normal w-max ">
            <Link href="#beranda" id="home">
              <h1>Beranda</h1>
            </Link>
            <Link href="#tentang">
              <h1>Tentang</h1>
            </Link>
            <Link href="#kontak">Kontak</Link>
          </div>

          <div>
            {session ? (
              <div className="flex dropdown dropdown-bottom">
                <Image
                  src={session.user.iamge || "/imgLogo/user.jpg"}
                  alt="avatar"
                  tabIndex={0}
                  role="button"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div
                  className=" absolute top-20 w-max h-max dropdown-content menu"
                  tabIndex={0}
                >
                  <div className=" bg-white flex flex-col p-5 shadow-md rounded-md">
                    <p>Hello {session?.user.name}</p>
                    <p className="text-xs">{session?.user.email}</p>
                    <div className="mt-6 w-full">
                      {session.user.role === "admin" ? (
                        <Link
                          href="/dashboard"
                          className="flex items-center w-full justify-between pb-1 cursor-pointer  border-b-2 border-black"
                        >
                          <h1 className="w-max">Dashboard </h1>
                          <i className="bx bx-home-smile bx-sm"></i>
                        </Link>
                      ) : (
                        <Link
                          href="/dashboardUser"
                          className="flex items-center w-full justify-between pb-1 cursor-pointer  border-b-2 border-black"
                        >
                          <h1 className="w-max">Dashboard </h1>
                          <i className="bx bx-home-smile bx-sm"></i>
                        </Link>
                      )}

                      {session.user.role === "user" ? (
                        <Link
                          href="/form"
                          className="flex items-center w-full justify-between cursor-pointer py-1 border-b-2 border-black"
                        >
                          <h1>Form</h1>
                          <i className="bx bx-paperclip bx-sm"></i>
                        </Link>
                      ) : null}

                      <div
                        onClick={signOutCredentials}
                        className="flex items-center w-full justify-between pt-2 text-red-500 cursor-pointer"
                      >
                        <h1 className="w-max">Log Out </h1>
                        <i className="bx bx-log-out-circle bx-sm "></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 text-base items-center">
                <Link
                  href="/login"
                  className="py-2 px-3 rounded-md outline outline-2 outline-gray-300 text-gray-400 hover:outline-none hover:bg-gray-400 hover:text-white transition-all ease-in-out"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-md bg-gray-300 py-2 px-3 text-white hover:bg-gray-400 transition-all ease-in-out"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Navbar Side */}
      <nav className="drawer drawer-end fixed z-10 flex md:hidden p-2 bg-[#f7f9ff] items-center">
        {/* Toggle Open */}
        <input type="checkbox" id="my-drawer-open" className=" drawer-toggle" />
        <div className="drawer-content flex w-full justify-between p-3">
          <Link href="/">
            <Image src={Logo1} alt="logo" className="w-16"></Image>
          </Link>
          <label htmlFor="my-drawer-open" className="drawer-button ">
            <i className="bx bx-menu-alt-right bx-lg cursor-pointer"></i>
          </label>
        </div>

        <div className="drawer-side">
          <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <input
              type="checkbox"
              id="my-drawer-close"
              className=" drawer-toggle"
            />
            <label
              htmlFor="my-drawer-open"
              aria-label="close sidebar"
              className="drawer-overlay drawer-button "
            >
              <i
                className="bx bx-x bx-lg cursor-pointer"
                aria-label="close sidebar"
              ></i>
            </label>
            <div className="w-full h-full flex justify-center">
              {session ? (
                <div className="w-full h-full flex flex-col items-center">
                  <div className="w-full h-full flex justify-center">
                    <Image
                      src={session.user.iamge || "/imgLogo/user.jpg"}
                      alt="avatar"
                      width={100}
                      height={100}
                      className="rounded-xl"
                    />
                  </div>

                  <div className=" w-full h-full">
                    <div className=" flex flex-col p-5 rounded-md">
                      <p className="text-xl">Hello {session?.user.name}</p>
                      <p className="text-md">{session?.user.email}</p>
                      <div className="mt-6 w-full flex flex-col gap-7 font-semibold">
                        {/* Dashboard Setting */}
                        {session.user.role === "admin" ? (
                          <Link
                            href="/dashboard"
                            className="flex items-center w-full justify-between cursor-pointer pb-1 border-b-2 border-black"
                          >
                            <h1 className="w-max">Dashboard </h1>
                            <i className="bx bx-home-smile bx-sm"></i>
                          </Link>
                        ) : (
                          <Link
                            href="/dashboardUser"
                            className="flex items-center w-full justify-between cursor-pointer pb-1 border-b-2 border-black"
                          >
                            <h1 className="w-max">Dashboard </h1>
                            <i className="bx bx-home-smile bx-sm"></i>
                          </Link>
                        )}
                        {/* Dashboard Setting */}

                        <Link
                          href="/form"
                          className="flex items-center w-full justify-between cursor-pointer pb-1 border-b-2 border-black"
                        >
                          <h1>Form</h1>
                          <i className="bx bx-paperclip bx-sm"></i>
                        </Link>

                        <div
                          onClick={signOutCredentials}
                          className="flex items-center w-full justify-between text-red-500 cursor-pointer"
                        >
                          <h1 className="w-max">Log Out </h1>
                          <i className="bx bx-log-out-circle bx-sm "></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 text-base items-center">
                  <Link
                    href="/login"
                    className="py-2 px-3 rounded-md outline outline-2 outline-gray-300 text-gray-400 hover:outline-none hover:bg-gray-400 hover:text-white transition-all ease-in-out"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="rounded-md bg-gray-300 py-2 px-3 text-white hover:bg-gray-400 transition-all ease-in-out"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
