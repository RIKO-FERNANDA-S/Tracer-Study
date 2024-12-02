import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import Image from "next/image";

async function Dashboard() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  if (session?.user.role !== "admin") {
    redirect("/dashboardUser");
  }

  return (
    <main className="w-full h-screen p-5">
      <section className="w-full h-screen">
        <div className="w-full h-max flex gap-10 mt-4">
          <div className="w-1/2 h-52 flex flex-col justify-center px-5 py-2 bg-blue-50 outline-lime-400 outline-2 outline-dashed  rounded-xl">
          <h1 className="font-bold text-3xl mb-2">Welcome Admin</h1>
          <div className="flex gap-6 h-full w-full">
            <div className="flex items-start justify-center pt-4">
            <Image
              src={session.user.image || "/imgLogo/user.jpg"}
              width={110}
              height={110}
              alt="avatar"
              className="rounded-xl "
            />
            </div>
            <div className="h-full w-full flex flex-col justify-start">
              <h2 className="font-medium text-2xl mt-2"> <span className="capitalize">{session.user.name}</span></h2>
              <h2 className="font-normal text-lg">Email : {session.user.email}</h2>
              <div className="flex gap-3 h-full bottom-0">
              <button className="w-full h-max bg-blue-600 rounded-lg font-medium text-white py-2 mt-2 active:bg-blue-500 transition-all ease-in-out duration-100 active:scale-95">Edit Profile</button>
              <button className="w-full h-max bg-blue-600 rounded-lg font-medium text-white py-2 mt-2 active:bg-blue-500 transition-all ease-in-out duration-100 active:scale-95">Edit Profile</button>
              </div>
            </div>
          </div>
          </div>
          <div className="w-1/2 h-52 flex gap-5">
            <div className="bg-blue-50 outline-lime-400 outline-2 outline-dashed  rounded-xl w-1/2 h-full"></div>
            <div className="bg-blue-50 outline-lime-400 outline-2 outline-dashed  rounded-xl w-1/2 h-full"></div>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}

export default Dashboard;
