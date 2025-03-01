import { redirect } from "next/navigation";
import { auth } from "../../../../auth";


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth()

  if(session?.user.role === "admin"){
    redirect("/dashboard")
  }

  return (
    <main className="h-max w-full flex justify-center bg-bgForm bg-cover bg-no-repeat text-black">
      <div className="w-full">
      
      {children}
      </div>
    </main>
  );
}
