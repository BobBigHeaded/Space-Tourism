"use client"
import clsx from "clsx";
import { useState } from "react";

export default function crew() {
    const crewMember = [{
        "index": 0,
        "position": "COMMANDER",
        "name": "DOUGLAS HURLEY",
        "description": `Douglas Gerald Hurley is an American engineer,
         former Marine Corps pilot and former NASA astronaut. He launched
         into space for the third time as commander of Crew Dragon Demo-2.`,
        "image": "/assets/crew/image-douglas-hurley.png"
    },
    {
        "index": 1,
        "position": "MISSION SPECIALIST",
        "name": "MARK SHUTTLEWORTH",
        "description": `Mark Richard Shuttleworth is the founder and CEO
         of Canonical, the company behind the Linux-based Ubuntu operating
          system. Shuttleworth became the first South African to travel to
           space as a space tourist.`,
        "image": "/assets/crew/image-mark-shuttleworth.png"
    },
    {
        "index": 2,
        "position": "PILOT",
        "name": "VICTOR GLOVER",
        "description": `Pilot on the first operational flight of the SpaceX
         Crew Dragon to the International Space Station. Glover is a commander
          in the U.S. Navy where he pilots an F/A-18.He was a crew member of
           Expedition 64, and served as a station systems flight engineer. `,
        "image": "/assets/crew/image-victor-glover.png"
    },
    {
        "index": 3,
        "position": "FLIGHT ENGINEER",
        "name": "ANOUSHEH ANSARI",
        "description": `Anousheh Ansari is an Iranian American engineer and
         co-founder of Prodea Systems. Ansari was the fourth self-funded space
          tourist, the first self-funded woman to fly to the ISS, and the first
           Iranian in space. `,
        "image": "/assets/crew/image-anousheh-ansari.png"
    }
    ]

    const [index, setIndex] = useState(0);
    const currentMember = crewMember.find(location => location.index === index)

    return (
        <div className="flex flex-1 xl:my-[96px] mt-[40px] mb-[0px] mx-[0px] xl:mx-[165px] justify-center flex-col">
            <div className="flex flex-row gap-[24px] h-[65px] text-[28px] items-start justify-center md:justify-start mx-[40px] xl:mx-0">
                <p className="font-barlowCondensed font-semibold text-[#FFFFFF]/25">0 2</p>
                <p className="font-barlowCondensed tracking-[4px] font-light"> MEET YOUR CREW</p>
            </div>
            <div className="flex max-h-full xl:min-w-[1100px] flex-col xl:flex-row gap-[32px]">
                <div className="flex flex-1 flex-col items-center xl:items-start h-[500px]">
                    <div className="flex-1 flex flex-col w-[560px] text-center xl:text-left justify-center">
                        <p className="text-[28px] md:text-[32px] font-bellefair text-[#FFFFFF]/50">{currentMember.position}</p>
                        <p className="text-[40px] md:text-[56px] font-bellefair text-[#FFFFFF]">{currentMember.name}</p>
                        <p className={clsx("pt-[24px] text-[18px] font-barlow text-[#D0D6F9] leading-[180%]",
                            "font-extralight md:w-[560px]")}>{currentMember.description}</p>
                    </div>

                    <div className="flex mt-[140px] md:mt-[80px]">
                        <div className="flex flex-row gap-[40px] justify-center xl:justify-start w-full">
                            <button onClick={() => setIndex(0)}>
                                <div className={clsx("transition-all h-[15px] w-[15px] rounded-full",
                                    index === 0 ? "bg-white" : "bg-white/20 hover:bg-white/50"
                                )}>
                                </div>
                            </button>
                            <button onClick={() => setIndex(1)}>
                                <div className={clsx("transition-all h-[15px] w-[15px] rounded-full",
                                    index === 1 ? "bg-white" : "bg-white/20 hover:bg-white/50"
                                )}>
                                </div>
                            </button>
                            <button onClick={() => setIndex(2)}>
                                <div className={clsx("transition-all h-[15px] w-[15px] rounded-full",
                                    index === 2 ? "bg-white" : "bg-white/20 hover:bg-white/50"
                                )}>
                                </div>
                            </button>
                            <button onClick={() => setIndex(3)}>
                                <div className={clsx("transition-all h-[15px] w-[15px] rounded-full",
                                    index === 3 ? "bg-white" : "bg-white/20 hover:bg-white/50"
                                )}>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex-1 flex justify-center">
                        <img className="w-[32rem] xl:w-[38rem]" src={currentMember.image}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}