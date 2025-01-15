import "./globals.css";
import Header from "@/components/theme/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return (
    <html lang="en">
      <body
          className={` antialiased`}
      >
      <Header/>
      <main className={"w-full bg-[#F5F6FA] "}>
          {children}
      </main>
      </body>
    </html>
  );
}
