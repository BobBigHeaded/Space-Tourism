import React from "react";
import clsx from "clsx";

export default function DestinationLayout({ children }) {
    return <section className="flex">
        <html lang="en" className={clsx('h-full bg-center bg-cover bg-no-repeat',
            'bg-[url("/assets/destination/background-destination-mobile.jpg")]',
            'md:bg-[url("/assets/destination/background-destination-tablet.jpg")]',
            'xl:bg-[url("/assets/destination/background-destination-desktop.jpg")]')}>
        </html>

        <div className="">
            {children}
            <div>layout</div>
        </div>
    </section>
}