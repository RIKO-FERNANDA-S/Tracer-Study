"use client";
import React from "react";
import Date from "../../fragments/date";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Pp from "../../../../public/imgLogo/user.jpg";
import { signOutCredentials } from "@/lib/action";
import { useSession } from "next-auth/react";
import { DialogTitle } from "@radix-ui/react-dialog";

function NavDashboard() {
  const { data: session } = useSession();
  return (
    <div className="text-black">
      <div className="w-full h-max flex gap-5 justify-between border-b-2 p-5">
        <div className="h-full flex items-center w-max pl-7 gap-3">
          <h1 className="text-xl font-semibold capitalize text-wrap font-Poppins leading-10 text-[#374151]">
            Selamat Datang
          </h1>
          <div className="flex items-center  text-slate-400">
            <i className="bx bxs-chevrons-right bx-sm"></i>
            <Date />
          </div>
        </div>

        <div className="flex items-center w-max h-full gap-8">
          <Sheet>
            <SheetTrigger className="flex items-center">
            <i className="bx bx-bell bx-sm"></i>
            </SheetTrigger>
            
            <SheetContent>
            <SheetHeader>
              Notifikasi
            </SheetHeader>
            <DialogTitle>
              allow
            </DialogTitle>
            </SheetContent>
          </Sheet>
          
          <Sheet>
            <SheetTrigger className="flex items-center">
            <i className="bx bxs-inbox bx-sm"></i>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>Pesan Masuk</SheetHeader>
              <DialogTitle>aaaaa</DialogTitle>
          </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger className="flex items-center">
              <i className="bx bx-cog bx-sm"></i>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle className="text-4xl mt-4">
                  Setting Account{" "}
                </SheetTitle>
              </SheetHeader>
              <div className="w-full h-max px-5 mt-5">
                  <div className="w-full flex flex-col gap-8">
                    <div
                      onClick={signOutCredentials}
                      className="w-full h-max cursor-pointer flex gap-5 items-center text-red-400"
                    >
                      <i className="bx bx-log-out bx-sm"></i>
                      <h1 className="text-xl">Logout</h1>
                    </div>

                    <div>
                      <div className="flex gap-3 items-center text-black">
                        <Image
                          src={Pp}
                          alt="profil"
                          className="w-12 rounded-full"
                        ></Image>
                        <div className="">
                          <h1 className="text-md font-medium capitalize">
                            {session?.user.name}
                          </h1>
                          <h1 className="text-sm font-light lowercase text-wrap">
                            {session?.user.email}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </div>
  );
}

export default NavDashboard;
