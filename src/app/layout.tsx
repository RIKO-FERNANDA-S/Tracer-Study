"use client"
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";




const Navbar = dynamic(() => import("@/components/layouts/navbar"))
const disabeledNavbar = ["/register", "/login", "/"];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()
  return (

    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased text-black bg-white`}>
       {!disabeledNavbar.includes(pathname) && <Navbar />}
        <main>
        {children}
        </main>
        </body>
    </html>

  );
}
