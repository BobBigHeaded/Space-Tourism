"use client";
import clsx from "clsx";
import { useState } from "react";


const InfoTabs = ({ data }, { children }) => {

    const [index, setIndex] = useState(0);
    const currentLocation = data.find(location => location.index === index)

    return (
        <div className="flex min-w-full min-h-full pt-[48px]">

            <div className="flex-1 my-[40px] mx-[165px] flex flex-col">

                <div className="flex flex-row gap-[24px] font-barlowCondensed text-[30px] pb-[20px]">

                    <p className="font-semibold text-[#FFFFFF]/25">0 1</p>
                    <p className="font-light text-[#FFFFFF] tracking-[4px]">PICK YOUR DESTINATION</p>

                </div>

                <div className="flex-1 flex flex-row gap-[20px]">

                    <div className="flex-1 flex justify-center items-center">
                        <img src={currentLocation.image} className="min-h-[480px] min-w-[480px]"></img>
                    </div>
                    <div className="flex-1 flex justify-center items-center max-w-[800px]">
                        <div className="flex justify-between flex-col gap-y-[38px] mx-[60px]">

                            {/* buttons */}

                            <div className={clsx("flex flex-row gap-x-[32px] min-w-full font-barlowCondensed text-[18px]",
                                "tracking-[2px] font-light")}>

                                <button onClick={() => setIndex(0)} className="group flex justify-center flex-col gap-y-[8px]">
                                    <p className={clsx("transition-all", index === 0 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>MOON</p>
                                    <div className={clsx("transition-all min-h-[3px] min-w-full",
                                        index === 0 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                    )}></div>
                                </button>

                                <button onClick={() => setIndex(1)} className="group flex justify-center flex-col gap-y-[8px]">
                                    <p className={clsx("transition-all", index === 1 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>MARS</p>
                                    <div className={clsx("transition-all min-h-[3px] min-w-full",
                                        index === 1 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                    )}></div>
                                </button>

                                <button onClick={() => setIndex(2)} className="group flex justify-center flex-col gap-y-[8px]">
                                    <p className={clsx("transition-all", index === 2 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>EUROPA</p>
                                    <div className={clsx("transition-all min-h-[3px] min-w-full",
                                        index === 2 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                    )}></div>
                                </button>

                                <button onClick={() => setIndex(3)} className="group flex justify-center flex-col gap-y-[8px]">
                                    <p className={clsx("transition-all", index === 3 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>TITAN</p>
                                    <div className={clsx("transition-all min-h-[3px] min-w-full",
                                        index === 3 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                    )}></div>
                                </button>
                            </div>

                            {/* name */}

                            <p className="font-bellefair text-[100px] text-[#FFFFFF]">
                                {currentLocation.name}</p>

                            {/* desc */}

                            <p className="min-w-[420px] font-barlow text-[18px] text-[#D0D6F9] leading-[180%] font-extralight">
                                {currentLocation.description}</p>

                            {/* seperator */}

                            <div className="min-w-full min-h-[1px] bg-[#FFFFFF]/20"></div>

                            {/* distance and time */}

                            <div className="flex flex-row gap-[24px]">
                                <div className="flex-1">
                                    <p className="font-barlowCondensed text-[14px] text-[#D0D6F9] tracking-[2px] font-thin">
                                        AVG. DISTANCE</p>

                                    <p className="font-bellefair text-[28px]">{currentLocation.distance}</p>
                                </div>
                                <div className="flex-1">
                                    <p className="font-barlowCondensed text-[14px] text-[#D0D6F9] tracking-[2px] font-thin">
                                        EST. TRAVEL TIME</p>

                                    <p className="font-bellefair text-[28px]">{currentLocation.travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>

    )
};

export default InfoTabs;