"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Head from "next/head";

const BackgroundSelect = ({ children }) => {
    function getBg(currentPage) {
        return (clsx(
            // change the ${} to just a string this just breaks it
            `bg-[url("/assets/${currentPage}/background-${currentPage}-mobile.jpg")]`,
            `md:bg-[url("/assets/${currentPage}/background-${currentPage}-tablet.jpg")]`,
            `xl:bg-[url("/assets/${currentPage}/background-${currentPage}-desktop.jpg")]`))
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