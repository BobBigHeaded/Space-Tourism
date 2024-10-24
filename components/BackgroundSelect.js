"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const BackgroundSelect = ({ children }) => {
    function getBg(currentPage) {
        switch (currentPage) {
            case "home":
                return (clsx(
                    `bg-[url("/assets/home/background-home-mobile.jpg")]`,
                    `md:bg-[url("/assets/home/background-home-tablet.jpg")]`,
                    `xl:bg-[url("/assets/home/background-home-desktop.jpg")]`))
            case "destination":
                return (clsx(
                    `bg-[url("/assets/destination/background-destination-mobile.jpg")]`,
                    `md:bg-[url("/assets/destination/background-destination-tablet.jpg")]`,
                    `xl:bg-[url("/assets/destination/background-destination-desktop.jpg")]`))
            case "crew":
                return (clsx(
                    `bg-[url("/assets/crew/background-crew-mobile.jpg")]`,
                    `md:bg-[url("/assets/crew/background-crew-tablet.jpg")]`,
                    `xl:bg-[url("/assets/crew/background-crew-desktop.jpg")]`))
            case "technology":
                return (clsx(
                    `bg-[url("/assets/technology/background-technology-mobile.jpg")]`,
                    `md:bg-[url("/assets/technology/background-technology-tablet.jpg")]`,
                    `xl:bg-[url("/assets/technology/background-technology-desktop.jpg")]`))
        }
    }

    return (
        <html lang="en" className={clsx('h-full bg-cover bg-no-repeat',
            usePathname() === "/" ? `${getBg("home")} bg-right` :
                usePathname() === "/destination" ? getBg("destination") :
                    usePathname() === "/crew" ? getBg("crew") :
                        usePathname() === "/technology" ? getBg("technology") :
                            "bg-black")}>

            {children}
        </html>
    );
};

export default BackgroundSelect;