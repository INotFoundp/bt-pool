import "./globals.css";
import Header from "@/components/theme/Header";
import Footer from "@/components/theme/Footer";
import getUserFromCookie from "@/backend/tools/getUser";


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
      {/*// @ts-ignore*/}
      <Header user={data}/>
      <main className={"w-ful mt-12 py-4 bg-[#F5F6FA] "}>
          {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
