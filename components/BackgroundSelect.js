"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const BackgroundSelect = ({ children }) => {
    function getBg(currentPage) {
        return (clsx(
            `bg-[url("/assets/${currentPage}/background-${currentPage}-mobile.jpg")]`,
            `md:bg-[url("/assets/${currentPage}/background-${currentPage}-tablet.jpg")]`,
            `xl:bg-[url("/assets/${currentPage}/background-${currentPage}-desktop.jpg")]`))
    }

    return (
        <html lang="en" className={clsx('h-full bg-right bg-cover bg-no-repeat',
            usePathname() === "/" ? getBg("home") :
                usePathname() === "/destination" ? getBg("destination") :
                    usePathname() === "/crew" ? getBg("crew") :
                        usePathname() === "/technology" ? "technology" :
                            "bg-black",)}>

            {children}
        </html>
    );
};

export default BackgroundSelect;