"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Profile from "../../../../../public/imgLogo/user.jpg";
import Link from "next/link";

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
};

function DashboardUser() {


    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const res = await fetch("/api/dataSiswa"); 
          if (!res.ok) throw new Error("Failed to fetch user");
  
          const data = await res.json();
          setUser(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, []);

if (isLoading) return <main className="h-screen"><span className="loading loading-dots loading-md"></span></main>;

  return (
    <div className="w-full h-max font-Roboto">
      <main className=" w-full h-max flex flex-col items-center ">

        <article className="w-full h-max gap-9 flex flex-col absolute z-10 items-center shadow-lg bg-blue-100 px-7 justify-between py-5 pb-8 border-b-2 border-solid border-black rounded-b-3xl ">
         
          <div className="w-full mb-2 flex gap-3 ">
          <Link href="/" className="text-xl flex items-center"><i className='bx bx-left-arrow-alt'></i> Back </Link>
          <div className="w-full ml-3">
            <h1 className="text-lg font-bold italic text-gray-400">Dashboard User/</h1>
            </div>
          </div>
          
          <div className="w-full h-max py-6">
          

            <div className="flex gap-6 w-full">
            <Image
              src={Profile}
              alt="profile"
              className="w-32 h-36 shadow-xl"
            ></Image>
            <div className="flex flex-col gap-5">

            <div className="flex flex-wrap gap-3">
                <p className="text-lg font-bold capitalize">Nama Lengkap : </p>
                <p className="text-lg px-3 capitalize text-nowrap">
                {user?.name || "data belum diisi" }
                </p>
              </div>

            <div className="flex flex-wrap gap-3">
                <p className="text-lg font-bold capitalize">Jurusan : </p>
                <p className="text-lg px-3 uppercase text-nowrap">
                {user?.major}
                </p>
              </div>
            <div className="flex flex-wrap gap-3">
                <p className="text-lg font-bold capitalize">Lulus Tahun : </p>
                <p className="text-lg px-3 uppercase text-nowrap">
                {user?.tahunLulus || "-"}
                </p>
              </div>
              
            </div>
            </div>
          </div>

        </article>
        <article className=" w-full h-max pb-10 bg-white relative top-[15rem] pt-28">
          <div className="h-max flex flex-col items-center px-2 w-full">

            <h1 className="text-4xl mt-4">Data Diri</h1>

            <div className="w-full h-max flex flex-col items-start mt-5 gap-6 px-7">
              
              <div>
                <p className="text-xl font-bold">Tempat Lahir :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">{user?.placeOfBirth}</p>
              </div>
              <div>
                <p className="text-xl font-bold">Tanggal Lahir :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">{user?.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-xl font-bold">Kelamin :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">{user?.gender}</p>
              </div>
              <div>
                <p className="text-xl font-bold">Alamat :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  {user?.address}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Nomor Telfon :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  {user?.noTelphone}
                </p>
              </div>
            </div>

          
          </div>

        </article>
      </main>
    </div>
  );
}

export default DashboardUser;


