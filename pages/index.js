import Image from "next/image";
import localFont from "next/font/local";

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
//dawddw
export default function Home() {
  return (
    <div
      className={`min-h-screen min-w-screen bg-cover bg-center`}
      style={{ backgroundImage: 'url("/assets/home/background-home-desktop.jpg")' }}
    >
    </div>
  );
}
