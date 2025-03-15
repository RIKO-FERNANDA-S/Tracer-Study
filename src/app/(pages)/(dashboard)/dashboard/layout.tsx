import NavSide from "@/components/layouts/navbar/navSide"


import { auth } from "../../../../../auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracer Study Mawa",
  description: "tracer study",
  icons: "/logo.svg",
};

export default async function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const session = await auth();
    if (session?.user.role !== "admin") {
      redirect("/login");
    }
    return (
      <main className="flex bg-gray-50 text-black">
        <NavSide/>
        <div className="w-full h-screen">
        {children}
        </div>
      </main>
    )
  }