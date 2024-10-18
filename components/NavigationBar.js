"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavigationBar = () => {

    const menuTextStyle = "font-barlowCondensed tracking-[0.125em] font-thin";

    return (
        <div
            className={clsx('min-h-[96px] w-full xl:max-w-[736px]',
                'backdrop-blur-xl bg-white/5 flex justify-between xl:justify-end',
                'items-center gap-12 md:pr-12 md:pl-[80px] xl:px-12 md:inline-flex hidden')}>

            <a href={'/'} className="flex group">
                <div className="min-h-[96px] flex flex-col justify-between">
                    <div></div>
                    <p className={menuTextStyle}>
                        <span className='hidden font-semibold flex xl:inline-flex'>00</span>&nbsp;HOME
                    </p>
                    <div className={clsx("transition-all min-h-[3px] w-full",
                        usePathname() === "/" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40")}>
                    </div>
                </div>
            </a>

            <a href={'/destination'} className="flex group">
                <div className="min-h-[96px] flex flex-col justify-between">
                    <div></div>
                    <p className={menuTextStyle}>
                        <span className='font-semibold'>01</span>&nbsp;DESTINATION
                    </p>
                    <div className={clsx("transition-all min-h-[3px] w-full",
                        usePathname() === "/destination" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40")}>
                    </div>
                </div>
            </a>

            <a href={'/crew'} className="flex group">
                <div className="min-h-[96px] flex flex-col justify-between">
                    <div></div>
                    <p className={menuTextStyle}>
                        <span className='font-semibold'>02</span>&nbsp;CREW
                    </p>
                    <div className={clsx("transition-all min-h-[3px] w-full",
                        usePathname() === "/crew" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40")}>
                    </div>
                </div>
            </a>

            <a href={'/technology'} className="flex group">
                <div className="min-h-[96px] flex flex-col justify-between">
                    <div></div>
                    <p className={menuTextStyle}>
                        <span className='font-semibold'>03</span>&nbsp;TECHNOLOGY
                    </p>
                    <div className={clsx("transition-all min-h-[3px] w-full",
                        usePathname() === "/technology" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40")}>
                    </div>
                </div>
            </a>

        </div>
    );
};

export default NavigationBar;