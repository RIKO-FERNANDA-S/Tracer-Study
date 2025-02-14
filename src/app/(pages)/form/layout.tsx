import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import Back from "../../../../public/img/hero.jpg";
import Image from "next/image";
import Logo from "../../../../public/imgLogo/icon.png";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  if (session?.user.role == "admin") {
    redirect("/dashboard");
  }
  return (
    <main className="h-max w-full flex justify-center">
      <div>
      <nav className="flex flex-col w-max rounded-[.5rem] px-10 justify-center gap-7 items-center h-max py-8">
        <div className=" shadow-xl">
          <Image
            src={Back}
            alt="mam"
            className="w-[70rem] h-80 brightness-75 rounded-[1rem]"
          ></Image>
        </div>
        <div className="w-max flex flex-col items-center">
          <div className="mt-10">
            <h1 className="block text-biruSMKPK text-6xl font-semibold mb-2 font-Monstserrat">
              Formulir Survei
            </h1>
          </div>
        </div>
      <div className="w-[60rem] h-max flex flex-col gap-4 justify-center bg-white rounded-xl shadow-md p-6 py-10">
        <h1 className="capitalize text-lg font-semibold">
          Nama: {session?.user.name}
        </h1>
        <h1 className="text-lg font-semibold">Email: {session?.user.email}</h1>
        <p>
          *masukan data sesuai contoh, jika ada angka bisa dihapus untuk
          mengetahui contoh nya
        </p>
      </div>
      </nav>
      {children}
      </div>
    </main>
  );
}
