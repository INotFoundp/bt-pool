import "./globals.css";
import Header from "@/components/theme/Header";
import Footer from "@/components/theme/Footer";
import getUserFromCookie from "@/backend/tools/getUser";
import {Toaster} from "react-hot-toast";
import React from "react";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'BT-POOL | BTC mining POOL',

}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getUserFromCookie()

  const data = JSON.parse(JSON.stringify(user))


  return (
    <html lang="en">
      <body className={`antialiased`}>

      <Header user={data}/>
      <Toaster toastOptions={{
          position : "bottom-left"
      }}  />
      <main className={"w-ful  bg-[#121212] "}>
          {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
