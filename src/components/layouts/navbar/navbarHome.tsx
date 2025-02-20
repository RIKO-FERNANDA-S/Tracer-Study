"use client";
import { signOutCredentials } from "@/lib/action";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "../../../../public/imgLogo/icon.png";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <main className="w-full h-max flex justify-center">
      <div className="w-11/12 h-max hidden md:flex items-center justify-between px-6 pt-5">
        <Link href="/" className="flex h-full items-center">
          <Image src={Logo1} alt="logo" className="w-20"></Image>
        </Link>

          <div className="flex items-center justify-center gap-20 text-xl font-semibold w-max font-Poppins">
            <Link href="#beranda" id="home">
              <h1>Beranda</h1>
            </Link>
            <Link href="#jejakKarir">
            <h1>Jejak Karir</h1>
            </Link>
            <Link href="#tentang">
              <h1>Tentang</h1>
            </Link>
            <Link href="#kontak">
            <h1>Kontak</h1>
            </Link>
          </div>
          
        <div className="font-poppins">

          <div>
            {session ? (
              <div className="flex dropdown dropdown-end z-10">
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
                  className=" absolute z-20 top-20 w-max h-max dropdown-content menu"
                  tabIndex={0}
                >
                  <div className=" bg-white flex flex-col p-5 shadow-md rounded-md w-48">
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
                  className="py-2 px-5 rounded-[.5rem] outline outline-2 outline-[#FFC107] text-[#FFC107] hover:outline-none hover:bg-kuningMawa1 hover:text-white transition-all ease-in-out"
                >
                  Masuk
                </Link>
                <Link
                  href="/register"
                  className="rounded-[.5rem] bg-kuningMawa1 py-2 px-5 text-white  transition-all ease-in-out"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navbar Side */}
      <nav className="drawer drawer-end z-20 flex md:hidden p-2 bg-[#f7f9ff] items-center w-full">
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

        <div className="drawer-side h-full">
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

    </main>
  );
};

export default Navbar;
