"use client";
import { useState } from "react";
import clsx from "clsx";

const Sidebar = () => {

    const menuTextStyle = "flex justify-center font-barlowCondensed tracking-[0.125em] font-thin";
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="flex flex-row max-h-[96px]">
            <div className={clsx('flex-1 p-4 max-h-[96px]')}>
                <div className="ml-auto">
                    <button className='min-h-[18px]' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <img src='/assets/shared/icon-close.svg'></img>
                        ) : (
                            <img src='/assets/shared/icon-hamburger.svg'></img>
                        )}
                    </button>
                </div>
            </div>

            <div className="flex">
                <div className={clsx('backdrop-blur-xl bg-white/5',
                    'h-screen transition-all duration-300 z-10',
                     isOpen ? 'w-[254px]': 'w-0 overflow-hidden')}>

                        <div className="flex flex-col items-center">
                            <div className="mt-4">

                                <a href="/" className={menuTextStyle}>
                                    <span className='font-semibold'>00</span>&nbsp;HOME
                                </a>
                            </div>
                            <div className="mt-4">

                                <a href="/destination" className={menuTextStyle}>
                                    <span className='font-semibold'>01</span>&nbsp;DESTINATION
                                </a>
                            </div>
                        </div>
                </div>
            </div>

        </div>

        
    );
};

export default Sidebar;