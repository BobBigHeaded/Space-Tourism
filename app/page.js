import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import clsx from "clsx";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const blur = true;


  return (

        <div 
          className="pt-[40px] flex justify-end">
          <div
            className="min-h-[96px] xl:min-h-[256px] min-w-[736px] p-4 box-content backdrop-blur-md bg-white/5 absolute">
          </div>

          <div className="z-10 flex flex-row justify-center">
            <p className="">
              00 Home
            </p>
            <p>
              01 Destination
            </p>
          </div>
        </div>
    
  );
}
