import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import Back from "../../../../public/img/img3.jpg";
import Image from "next/image";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth()

  if(session?.user.role === "admin"){
    redirect("/dashboard")
  }

  console.log([session?.user.role, session?.user.email])
  return (
    <main className="h-max w-full flex justify-center">
      <div className="w-full">
      <nav className="flex flex-col w-full justify-center gap-7 items-center h-max">
        <div className="w-full shadow-xl">
          <Image
            src={Back}
            alt="mam"
            className="w-full h-[28rem] brightness-75 "
          ></Image>
        </div>
        <div className="w-max flex flex-col items-center">
          <div className="mt-10">
            <h1 className="block text-biruSMKPK text-6xl font-semibold mb-2 font-Monstserrat">
              Formulir Tracer Study
            </h1>
          </div>
        </div>
      <div className="w-[60rem] h-max flex flex-col gap-4 justify-center bg-white rounded-xl shadow-md p-6 py-10">
        <p>
          *masukan data sesuai contoh, jika ada angka 0 bisa dihapus untuk
          mengetahui contoh nya
        </p>
      </div>
      </nav>
      {children}
      </div>
    </main>
  );
}
