import "./globals.css";
import Header from "@/components/theme/Header";
import Footer from "@/components/theme/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


    return (
    <html lang="en">
      <body className={`antialiased`}>
      <Header/>
      <main className={"w-ful mt-12 py-4 bg-[#F5F6FA] "}>
          {children}
      </main>
      <Footer />
      </body>
    </html>
  );
}
