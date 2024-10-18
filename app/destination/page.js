import InfoTabs from "@/components/InfoTabs"

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

    return (
        <div className="flex-1">
            <InfoTabs data={locations}></InfoTabs>
        </div>
    );
}