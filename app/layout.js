import Sidebar from "@/components/Sidebar";
import NavigationBar from "@/components/NavigationBar";
import BackgroundSelect from "@/components/BackgroundSelect";
import "@/styles/globals.css";
import clsx from "clsx";

export const metadata = {
  title: 'Space Tourism',
  description: 'Plan a trip to space.',
}

export default function RootLayout({ children }) {

  return (
    // <html lang="en" className={clsx('h-full bg-right bg-cover bg-no-repeat',
    //   'bg-[url("/assets/home/background-home-mobile.jpg")]',
    //   'md:bg-[url("/assets/home/background-home-tablet.jpg")]',
    //   'xl:bg-[url("/assets/home/background-home-desktop.jpg")]')}>

    <BackgroundSelect>
      <body className="h-full flex flex-col">

        <header className="flex flex-row justify-between relative w-full max-h-[96px] pl-[24px] md:pl-12 xl:py-12">
          <div className="min-h-[96px] xl:w-full flex flex-row xl:gap-12 items-center md:pr-12 xl:pr-0">

            <a href='/'><img src='/assets/shared/logo.svg' className="min-w-[40px] md:min-w-[48px]"></img></a>

            <div className="hidden w-full h-[1px] bg-white/25 flex xl:inline-flex"></div>

          </div>

          <NavigationBar />

          <div className="block md:hidden">
            <Sidebar />
          </div>
        </header>


        {children}

      </body>
    </BackgroundSelect>
    // </html>
  )
}
