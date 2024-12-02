"use client"
import React from 'react'
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Navbar = dynamic(() => import("@/components/layouts/navbarDash"), {ssr: false})
const disabeledNavbar = ["/register", "/login", "/"];

function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    const pathname = usePathname()
  return (
    <main className=''>
         {!disabeledNavbar.includes(pathname) && <Navbar />}
        {children}
    </main>
  )
}

export default Layout