"use client"
import clsx from "clsx";
import { useState } from "react";

export default function Technology() {
    const technology = [{
        "index": 0,
        "name": "LAUNCH VEHICLE",
        "description": `A launch vehicle or carrier rocket is a rocket-propelled
         vehicle used to carry a payload from Earth's surface to space, usually
          to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
           in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
        "lanImage": "/assets/technology/image-launch-vehicle-landscape.jpg",
        "portImage": "/assets/technology/image-launch-vehicle-portrait.jpg"
    },
    {
        "index": 1,
        "name": "SPACEPORT",
        "description": `A spaceport or cosmodrome is a site for launching
         (or receiving) spacecraft, by analogy to the seaport for ships or
          airport for aircraft. Based in the famous Cape Canaveral, our
           spaceport is ideally situated to take advantage of the Earth's
            rotation for launch.`,
        "lanImage": "/assets/technology/image-spaceport-landscape.jpg",
        "portImage": "/assets/technology/image-spaceport-portrait.jpg"
    },
    {
        "index": 2,
        "name": "SPACE CAPSULE",
        "description": `A launch vehicle or carrier rocket is a rocket-propelled
         vehicle used to carry a payload from Earth's surface to space, usually
          to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
           in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!`,
        "lanImage": "/assets/technology/image-space-capsule-landscape.jpg",
        "portImage": "/assets/technology/image-space-capsule-portrait.jpg"
    }
    ]
    const [index, setIndex] = useState(0);
    const currentTech = technology.find(location => location.index === index)

    return (
        <div className="flex-1 flex flex-col xl:ml-[165px]">
            <div className={clsx("font-barlowCondensed text-[28px] flex flex-row gap-[24px] mt-[40px] xl:mt-[80px] md:ml-[40px]",
                "xl:ml-0 justify-center md:justify-start")}>
                <p className="text-white/25 font-semibold">0 3</p>
                <p className="text-[#FFFFFF] tracking-[4px] font-light">SPACE LAUNCH 101</p>
            </div>
            <div className="flex-1 flex flex-col-reverse xl:flex-row">
                <div className="flex-1 flex flex-col xl:flex-row gap-[64px] items-center mr-[32px]">
                    <div className="flex flex-row xl:flex-col gap-[32px]">
                        <button onClick={() => setIndex(0)}>
                            <div className={clsx("transition-all w-[80px] h-[80px] flex justify-center items-center rounded-full",
                                index === 0 ? "text-black bg-white" : "text-[#FFFFFF] bg-transparent ring-1 ring-white/25 hover:ring-white"
                            )}>
                                <p className="font-bellefair text-[32px] tracking-[0px]">1</p>
                            </div>
                        </button>
                        <button onClick={() => setIndex(1)}>
                            <div className={clsx("transition-all w-[80px] h-[80px] flex justify-center items-center rounded-full",
                                index === 1 ? "text-black bg-white" : "text-[#FFFFFF] bg-transparent ring-1 ring-white/25 hover:ring-white"
                            )}>
                                <p className="font-bellefair text-[32px] tracking-[0px]">2</p>
                            </div>
                        </button>
                        <button onClick={() => setIndex(2)}>
                            <div className={clsx("transition-all w-[80px] h-[80px] flex justify-center items-center rounded-full",
                                index === 2 ? "text-black bg-white" : "text-[#FFFFFF] bg-transparent ring-1 ring-white/25 hover:ring-white"
                            )}>
                                <p className="font-bellefair text-[32px] tracking-[0px]">3</p>
                            </div>
                        </button>
                    </div>
                    <div className="text-center xl:text-left mx-[24px] md:mx-[128px] xl:mx-0 min-w-[475px]">
                        <p className="font-bellefair text-[24px] md:text-[32px] text-white/25">THE TERMINOLOGY...</p>
                        <p className="font-bellefair text-[40px] md:text-[56px] text-[#FFFFFF]">{currentTech.name}</p>
                        <p className="font-barlow text-[18px] leading-[180%] font-thin text-[#D0D6F9]">{currentTech.description}</p>
                    </div>
                </div>
                <div className="flex-1 flex justify-end items-center">
                    <img src={currentTech.lanImage} className="w-full xl:hidden"></img>
                    <img src={currentTech.portImage} className="w-full xl:inline-flex hidden"></img>
                </div>
            </div>
        </div>
    );
}