"use client"
import { useState } from "react";
import clsx from "clsx";

export default function PlanetPage() {
    const locations = [
        {
            "index": 0,
            "name": "MOON",
            "description": `See our planet as you've never seen it before.
             A perfect relaxing trip away to help regain perspective and come
              back refreshed.While you're there, take in some history by visiting
               the Luna 2 and Apollo 11 landing sites.`,
            "distance": "384,400 KM",
            "travel": "3 DAYS",
            "image": "/assets/destination/image-moon.png"
        },
        {
            "index": 1,
            "name": "MARS",
            "description": `Don't forget to pack your hiking boots. You'll
             need them to tackle Olympus Mons, the tallest planetary mountain
              in our solar system. It's two and a half times the size of Everest!`,
            "distance": "225 MIL. KM",
            "travel": "9 MONTHS",
            "image": "/assets/destination/image-mars.png"
        },
        {
            "index": 2,
            "name": "EUROPA",
            "description": `The smallest of the four Galilean moons orbiting Jupiter,
             Europa is a winter lover's dream. With an icy surface, it's perfect for
              a bit of ice skating, curling, hockey, or simple relaxation in your snug
               wintery cabin.`,
            "distance": "628 MIL. KM",
            "travel": "3 YEARS",
            "image": "/assets/destination/image-europa.png"
        },
        {
            "index": 3,
            "name": "TITAN",
            "description": `The only moon known to have a dense atmosphere other than
             Earth, Titan is a home away from home (just a few hundred degrees colder!).
              As a bonus, you get striking views of the Rings of Saturn.`,
            "distance": "1.6 BIL. KM",
            "travel": "7 YEARS",
            "image": "/assets/destination/image-titan.png"
        }
    ]

    const [index, setIndex] = useState(0);
    const currentLocation = locations.find(location => location.index === index)

    return (
        // <div className="flex-1">
        //     <InfoTabs data={locations}></InfoTabs>
        // </div>

        <div className="flex-1">
            <div className="flex min-w-full min-h-full pt-[48px] justify-center">

                <div className="flex-1 my-[40px] mx-[165px] flex flex-col">

                    <div className="flex justify-center md:justify-start flex-row gap-[24px] font-barlowCondensed text-[20px] xl:text-[30px] pb-[20px]">

                        <p className="font-semibold text-[#FFFFFF]/25">0 1</p>
                        <p className="font-light text-[#FFFFFF] tracking-[4px]">PICK YOUR DESTINATION</p>

                    </div>

                    <div className="flex-1 flex flex-col xl:flex-row gap-[20px] items-center" >

                        <div className="flex-1 flex justify-center items-center">
                            <img src={currentLocation.image} className={clsx("h-[350px] w-[350px]",
                                "md:h-[400px] md:w-[400px]",
                                "xl:h-[540px] xl:w-[540px]",
                                "max-w-[540px]")}></img>
                        </div>
                        <div className="flex-1 flex justify-center items-center max-w-[800px]">
                            <div className={clsx("flex justify-between items-center xl:items-start flex-col gap-y-[38px]",
                                "mx-[60px] max-w-[327px] md:max-w-[514px]")}>

                                {/* buttons */}

                                <div className={clsx("flex flex-row gap-x-[32px] min-w-full font-barlowCondensed text-[18px]",
                                    "tracking-[2px] font-light justify-center xl:justify-start")}>

                                    <button onClick={() => setIndex(0)} className="group flex justify-center flex-col gap-y-[8px]">
                                        <p className={clsx("transition-all", index === 0 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>{locations[0].name}</p>
                                        <div className={clsx("transition-all min-h-[3px] min-w-full",
                                            index === 0 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                        )}></div>
                                    </button>

                                    <button onClick={() => setIndex(1)} className="group flex justify-center flex-col gap-y-[8px]">
                                        <p className={clsx("transition-all", index === 1 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>{locations[1].name}</p>
                                        <div className={clsx("transition-all min-h-[3px] min-w-full",
                                            index === 1 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                        )}></div>
                                    </button>

                                    <button onClick={() => setIndex(2)} className="group flex justify-center flex-col gap-y-[8px]">
                                        <p className={clsx("transition-all", index === 2 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>{locations[2].name}</p>
                                        <div className={clsx("transition-all min-h-[3px] min-w-full",
                                            index === 2 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                        )}></div>
                                    </button>

                                    <button onClick={() => setIndex(3)} className="group flex justify-center flex-col gap-y-[8px]">
                                        <p className={clsx("transition-all", index === 3 ? "text-[#FFFFFF]" : "text-[#D0D6F9]")}>{locations[3].name}</p>
                                        <div className={clsx("transition-all min-h-[3px] min-w-full",
                                            index === 3 ? "bg-[#FFFFFF]" : "group-hover:bg-[#FFFFFF]/40"
                                        )}></div>
                                    </button>
                                </div>

                                {/* name */}

                                <p className="font-bellefair text-[100px] text-[#FFFFFF]">
                                    {currentLocation.name}</p>

                                {/* desc */}

                                <p className={clsx("min-w-[420px] font-barlow text-[18px] text-[#D0D6F9] leading-[180%] font-extralight",
                                    "text-center xl:text-left text-[15px] md:text-[16px] xl:text-[18px]")}>
                                    {currentLocation.description}</p>

                                {/* seperator */}

                                <div className="min-w-full min-h-[1px] bg-[#FFFFFF]/20"></div>

                                {/* distance and time */}

                                <div className="flex flex-col md:flex-row gap-[24px] self-stretch text-center xl:text-start">
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
                </div>
            </div>
        </div>
    );
}