import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracer Study Mawa",
  description: "tracer study",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased  `}>
        <SessionProvider>

          <main className="font-Poppins">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
