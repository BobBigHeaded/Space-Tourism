import Sidebar from "@/components/Sidebar";
import NavigationBar from "@/components/NavigationBar";
import BackgroundSelect from "@/components/BackgroundSelect";
import "@/styles/globals.css";

export const metadata = {
  title: 'Explore Space',
  description: 'Plan a trip to space.',
  icon: '/favicon.ico'
}

export default function RootLayout({ children }) {

  return (
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
  )
}
