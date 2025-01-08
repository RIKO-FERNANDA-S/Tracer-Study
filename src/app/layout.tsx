"use client"
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navbar from "@/components/layouts/navbarHome";
import { usePathname } from "next/navigation";


const disabledNavbar = ["/login", "/register", "/dashboard", "/form"]

const shouldDisableNavbar = (pathname: string) => {
  return disabledNavbar.some((prefix) => pathname.startsWith(prefix));
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isDisabledNavbar = shouldDisableNavbar(pathname)
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased text-black bg-white`}>
        <SessionProvider>
          
        {!isDisabledNavbar && <Navbar/>}
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
