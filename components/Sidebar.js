"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const Sidebar = () => {

    const menuTextStyle = "flex font-barlowCondensed tracking-[0.125em] font-thin text-[20px]";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex max-h-[96px] relative">
            <div className={clsx('flex-1 pr-[24px] p-4 max-h-[96px] absolute right-0 inset-y-0 flex items-center')}>
                <div className="flex justify-end">
                    <button className='min-h-[18px] min-w-[24px] z-20' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <img src='/assets/shared/icon-close.svg'></img>
                        ) : (
                            <img src='/assets/shared/icon-hamburger.svg'></img>
                        )}
                    </button>
                </div>
            </div>

            <div>
                <div className={clsx('backdrop-blur-xl bg-white/5',
                    'h-screen transition-all duration-300 z-10 overflow-hidden',
                    isOpen ? 'w-[400px]' : 'w-0')}>

                    <div className="flex flex-col pl-[32px]">
                        <Link className="group mt-[133px] flex flex-row justify-between min-w-[222px]"
                            href="/">
                            <p className={menuTextStyle}>
                                <span className='font-semibold'>00</span>&nbsp; HOME
                            </p>
                            <div></div>
                            <div className={clsx("transition-all min-h-full min-w-[3px]",
                                usePathname() === "/" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                            )}></div>
                        </Link>
                        <Link className="group mt-[32px] flex flex-row justify-between min-w-[222px]"
                            href="/destination">
                            <p className={menuTextStyle}>
                                <span className='font-semibold'>01</span>&nbsp; DESTINATION
                            </p>
                            <div></div>
                            <div className={clsx("transition-all min-h-full min-w-[3px]",
                                usePathname() === "/destination" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                            )}></div>
                        </Link>
                        <Link className="group mt-[32px] flex flex-row justify-between min-w-[222px]"
                            href="/crew">
                            <p className={menuTextStyle}>
                                <span className='font-semibold'>02</span>&nbsp; CREW
                            </p>
                            <div></div>
                            <div className={clsx("transition-all min-h-full min-w-[3px]",
                                usePathname() === "/crew" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                            )}></div>
                        </Link>
                        <Link className="group mt-[32px] flex flex-row justify-between min-w-[222px]"
                            href="/technology">
                            <p className={menuTextStyle}>
                                <span className='font-semibold'>03</span>&nbsp; TECHNOLOGY
                            </p>
                            <div></div>
                            <div className={clsx("transition-all min-h-full min-w-[3px]",
                                usePathname() === "/technology" ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                            )}></div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Sidebar;