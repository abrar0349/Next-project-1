import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web-Developer",
  description: "Website for web-developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <nav className="flex justify-between pt-5 pb-5">

          <div className="nav1 ps-5 pe-5 flex ">

            <Link href = '/' className="flex justify-center cursor-pointer"><CgWebsite /><span className="w-32 font-bold">Web-Developer</span></Link>

            <button className="text-3xl cursor-pointer block md:hidden" aria-label="Open menu">
              <FaBars />
            </button>
          </div>

          <div className="nav2 flex-1 border-2 flex justify-between ">
            <ul className="flex justify-between gap-x-8">
              <li className="orange"> Home </li>
              <li> About </li>
              <li> Courses </li>
              <li> Teachers </li>
              <li className="flex"> Blog <IoMdArrowDropdown /></li>
              <li> Contact </li>
            </ul>
            <button className="bg-orange-600 text-white p-2 cursor-pointer font-bold">Join Now</button>
          </div>

        </nav> */}
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
