import React from "react";
import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import NavDashboard from "@/components/layouts/navbar/navDashboard";
import Image from "next/image";
import Profile from "../../../../../public/imgLogo/user.jpg";

async function DashboardUser() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }if (session?.user.role !== "user") { 
    redirect("/dashboardUser");
  }

  return (
    <div className="w-full h-max">
      <main className="px-10 py-7 w-full h-max flex flex-col items-center ">
        <h1 className="text-4xl font-bold mb-6">Dasboard User</h1>

        <article className="w-full h-max flex flex-col items-center mx-8 border-b-2 border-solid border-black ">
          <div className="flex ">
            <Image
              src={Profile}
              alt="profile"
              className="w-48 rounded-full shadow-xl"
            ></Image>
          </div>
          <div className="flex flex-col items-center  bg-gray-50 shadow-md rounded-md mt-32 pt-24 pb-7 px-8 w-4/5">
            <h2 className="text-4xl font-semibold text-center">Data Diri</h2>
            <div className="w-full h-max flex flex-col items-start mt-5 gap-6">
              <div>
                <p className="text-xl font-bold">Nama Lengkap :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  {session?.user.name}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Tempat Lahir :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">{session?.user.placeOfBirth}</p>
              </div>
              <div>
                <p className="text-xl font-bold">Tanggal Lahir :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">2-4-2424</p>
              </div>
              <div>
                <p className="text-xl font-bold">Kelamin :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">Laki-Laki</p>
              </div>
              <div>
                <p className="text-xl font-bold">Alamat :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  Jl. Baru Gyat Gwencana
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Nomor Telfon :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  008877377388
                </p>
              </div>
            </div>
            <div className="border-2 border-black w-full my-9"></div>
            <div className="w-full h-max flex flex-col items-start gap-6">
              <div>
                <p className="text-xl font-bold">Jurusan :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">TKJ</p>
              </div>
              <div>
                <p className="text-xl font-bold">Tamat Tahun :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  2024
                </p>
              </div>
              <div className="border-2 border-black w-full my-9"></div>
              <div>
                <p className="text-xl font-bold">Tanggal Lahir :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">2-4-2424</p>
              </div>
              <div>
                <p className="text-xl font-bold">Kelamin :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">Laki-Laki</p>
              </div>
              <div>
                <p className="text-xl font-bold">Alamat :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  Jl. Baru Gyat Gwencana
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">Nomor Telfon :</p>
                <p className="text-lg bg-gray-200 px-6 capitalize">
                  008877377388
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


