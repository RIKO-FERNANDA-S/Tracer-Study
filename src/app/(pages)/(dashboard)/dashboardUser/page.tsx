"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "../../../../../public/imgLogo/user.jpg";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";

export type User = {
  id: string;
  email: string;
  name: string;
  major: string;
  tahunLulus: number;
  placeOfBirth: string;
  dateOfBirth: number;
  gender: string;
  address: string;
  noTelphone: string;
  alumniKuliah?: {
    namaKuliah: string;
    alamat: string;
  }[];
  alumniBekerja?: {
    tempatKerja: string;
    alamat: string;
    jabatan: string;
    statusPekerjaan: boolean;
    penghasilan: number;
  }[];
  alumniWirausaha?: {
    namaUsaha: string;
    penghasilan: number;
  }[];
};

// export type DataKuliah = {
//   kuliah: string;
//   alamat:string;
// }

function DashboardUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("/api/dataSiswa");
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setUser(data[0]);
        } else {
          setUser(null);
        }

        console.log("INI BRO DATA NYA :", data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isLoading)
    return (
      <main className="h-screen w-full flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </main>
    );

  return (
    <div className="w-full h-max font-Roboto">
      <main className=" w-full h-max flex flex-col items-center ">
        <article className="w-full h-max gap-3 flex flex-col absolute z-10 items-center shadow-lg bg-blue-100 px-7 justify-between py-5 pb-8 border-b-2 border-solid border-black rounded-b-3xl ">
          <nav className="w-full justify-between flex gap-3 ">
            <div>
              <Link href="/" className="text-xl flex items-center gap-3 font-medium">
                <i className="bx bx-left-arrow-alt bx-sm t"></i> Back
              </Link>
            </div>
            <Drawer>
              <DrawerTrigger asChild>
                <i className="bx bx-menu bx-md cursor-pointer"></i>
              </DrawerTrigger>
              <DrawerContent className="pb-10">
                <DialogTitle className="w-full flex justify-center mb-8">
                  <p className="text-4xl font-semibold">MENU FORM</p>
                </DialogTitle>
                <div className="w-full flex justify-center">
                  <div className="flex flex-wrap gap-5 justify-center">
                    <Link href="/form" className="btn btn-primary">
                      Form Data Diri
                    </Link>
                    <Link href="/form/bekerja" className="btn btn-primary">
                      Form Alumni Bekerja
                    </Link>
                    <Link href="/form/kuliah" className="btn btn-primary">
                      Form Alumni Kuliah
                    </Link>
                    <Link href="/form/wirausaha" className="btn btn-primary">
                      Form Alumni Wirausaha
                    </Link>
                  </div>
                </div>
                <DrawerClose asChild className="mt-10">
                  <div className="w-full flex justify-center">
                    <button className="btn btn-outline w-max">Close</button>
                  </div>
                </DrawerClose>
              </DrawerContent>
            </Drawer>
          </nav>

          <div className="w-full h-max py-3 ">
            <div className="flex flex-col items-center  gap-6 w-full">
              <Image
                src={Profile}
                alt="profile"
                className="w-auto h-32 shadow-xl rounded-full"
              ></Image>

              <div className="flex flex-col items-center w-full gap-1">
                <div className="flex text-center gap-3">
                  <span className="text-lg px-3 font-medium capitalize text-nowrap ">
                    {user?.name || "data belum diisi"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <p className="text-lg px-3 capitalize text-nowrap">
                    {user?.email || "data belum diisi"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div
          key={user?.id}
          className=" w-full h-max flex  gap-10 md:gap-0 pb-10 justify-around bg-white relative top-[20rem] pt-28"
        >

          <div className="flex flex-col w-full overflow-visible">
   
          <div className="collapse collapse-arrow relative z-10 "> 
          <input type="checkbox" />
            <h1 className="collapse-title font-semibold cursor-pointer text-2xl">Data Diri</h1>
            <ul className="collapse-content flex flex-col gap-5">
              <div className="flex ">
                <p className="text-xl ">Tempat Lahir :</p>
                <p className="text-lg px-6 capitalize">{user?.placeOfBirth}</p>
              </div>
              <div className="flex ">
                <p className="text-xl ">Tanggal Lahir :</p>
                <p className="text-lg px-6 capitalize">{user?.dateOfBirth}</p>
              </div>
              <div className="flex ">
                <p className="text-xl ">Kelamin :</p>
                <p className="text-lg px-6 capitalize">{user?.gender}</p>
              </div>
              <div className="flex ">
                <p className="text-xl ">Alamat :</p>
                <p className="text-lg px-6 capitalize">{user?.address}</p>
              </div>
              <div className="flex ">
                <p className="text-xl ">Nomor Telfon :</p>
                <p className="text-lg px-6 capitalize">{user?.noTelphone}</p>
              </div>
            </ul>
          </div>
          <div className="collapse collapse-arrow relative z-10 ">
          <input type="checkbox" />
            <h1 className="collapse-title font-semibold cursor-pointer text-2xl mt-4">Data Kerja</h1>
            <ul className="collapse-content cursor-pointer flex flex-col gap-10">
              <div className=" flex ">
                <p className="text-xl ">Tempat Bekerja :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniBekerja?.map((kerja, index) => (
                    <span key={index}>{kerja.tempatKerja}</span>
                  ))}
                </p>
              </div>
              <div className="flex w-full ">
                <p className="text-xl ">Alamat Kerja :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniBekerja?.map((kerja, index) => (
                    <span key={index}>{kerja.alamat}</span>
                  ))}
                </p>
              </div>
              <div className="flex w-full ">
                <p className="text-xl ">Jabatan Kerja :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniBekerja?.map((kerja, index) => (
                    <span key={index}>{kerja.jabatan}</span>
                  ))}
                </p>
              </div>
              <div className="flex w-full ">
                <p className="text-xl ">Penghasilan Kerja :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniBekerja?.map((kerja, index) => (
                    <span key={index}>{kerja.penghasilan}</span>
                  ))}
                </p>
              </div>
            </ul>
          </div>
          <div className="collapse collapse-arrow relative z-10">
          <input type="checkbox" />
            <h1 className="collapse-title font-semibold cursor-pointer text-2xl mt-4">Data Kuliah</h1>
            <ul className="collapse-content flex flex-col gap-2">
              <div className="flex w-full">
                <p className="text-xl ">Tempat Kuliah :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniKuliah?.map((kuliah, index) => (
                    <span key={index}>{kuliah.namaKuliah}</span>
                  ))}
                </p>
              </div>
              <div className="flex w-full">
                <p className="text-xl ">Alamat Kuliah :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniKuliah?.map((kuliah, index) => (
                    <span key={index}>{kuliah.alamat}</span>
                  ))}
                </p>
              </div>
            </ul>
          </div>
   
          
          <div className="collapse collapse-arrow relative z-10">
          <input type="checkbox" />
            <h1 className="collapse-title font-semibold cursor-pointer text-2xl mt-4">Data Wirausaha</h1>
            <div className="collapse-content flex flex-col gap-2">
              <div className="flex w-full">
                <p className="text-xl ">Nama Usaha :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniWirausaha?.map((usaha, index) => (
                    <span key={index}>{usaha.penghasilan}</span>
                  ))}
                </p>
              </div>
              <div className="flex w-full">
                <p className="text-xl ">Penghasilan :</p>
                <p className="text-lg px-6 capitalize">
                  {user?.alumniWirausaha?.map((usaha, index) => (
                    <span key={index}>{usaha.penghasilan}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
    
          </div>  

        </div>
      </main>
    </div>
  );
}

export default DashboardUser;
