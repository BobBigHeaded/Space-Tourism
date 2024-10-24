"use client"
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
        <div className="flex flex-1 py-[96px] mx-[165px] justify-center flex-col">
            <div className="flex flex-row gap-[24px] h-[65px] text-[28px] items-start">
                <p className="font-barlowCondensed font-semibold text-[#FFFFFF]/25">0 2</p>
                <p className="font-barlowCondensed tracking-[4px] font-light"> MEET YOUR CREW</p>
            </div>
            <div className="flex flex-1 flex-row gap-[32px]">
                <div className="flex flex-1 flex-col">
                    <div className="flex-1 flex justify-center flex-col">
                        <p className="text-[32px] font-bellefair text-[#FFFFFF]/50">{currentMember.position}</p>
                        <p className="text-[56px] font-bellefair text-[#FFFFFF]">{currentMember.name}</p>
                        <p className="pt-[24px] text-[18px] font-barlow text-[#D0D6F9] leading-[180%] font-extralight">{currentMember.description}</p>
                    </div>

                    <div className="h-[63px]">

                    </div>
                </div>
                <div className={"relative flex flex-1 justify-center items-center overflow-hidden"}>
                    <img className="flex-1" src={currentMember.image}></img>
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent overflow-hidden from-2%"></div>
                </div>
            </div>
        </div>
    );
}