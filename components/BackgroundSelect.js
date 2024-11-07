"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const pathToBGClassMap = {
    "/": `bg-right bg-[url("/assets/home/background-home-mobile.jpg")] md:bg-[url("/assets/home/background-home-tablet.jpg")] xl:bg-[url("/assets/home/background-home-desktop.jpg")]`,
    "/destination": `bg-[url("/assets/destination/background-destination-mobile.jpg")] md:bg-[url("/assets/destination/background-destination-tablet.jpg")] xl:bg-[url("/assets/destination/background-destination-desktop.jpg")]`,
    "/crew": `bg-[url("/assets/crew/background-crew-mobile.jpg")] md:bg-[url("/assets/crew/background-crew-tablet.jpg")] xl:bg-[url("/assets/crew/background-crew-desktop.jpg")]`,
    "/technology": `bg-[url("/assets/technology/background-technology-mobile.jpg")] md:bg-[url("/assets/technology/background-technology-tablet.jpg")] xl:bg-[url("/assets/technology/background-technology-desktop.jpg")]`,
}

const BackgroundSelect = ({ children }) => {
    const bg_class = pathToBGClassMap[usePathname()];
    return (
        <html lang="en" className={clsx('h-full bg-cover bg-no-repeat', bg_class)}>
            {children}
        </html>
    );
};

export default BackgroundSelect;