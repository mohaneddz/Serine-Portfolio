import Image from "next/image";

const player = '/svgs/hero/hero player.svg'

const back = '/svgs/hero/hero back.svg'
const next = '/svgs/hero/hero next.svg'
const pause = '/svgs/hero/hero pause.svg'

export default function HeroPlayer() {
    return (
        <div className="center flex-col gap-8 w-full">
            <Image src={player} alt="Hero Player" width={800} height={400} className="w-full" />
            <div className="flex w-full justify-between">
                <p className="font-black text-3xl text-primary-dim transition-colors duration-200 hover:text-primary">P01</p>
                <Image src={back} alt="Hero Back" width={64} height={64} className="hover-scale-lg" />
                <Image src={pause} alt="Hero Pause" width={64} height={64} className="hover-scale-lg" />
                <Image src={next} alt="Hero Next" width={64} height={64} className="hover-scale-lg" />
                <p className="font-black text-3xl text-primary-dim transition-colors duration-200 hover:text-primary">P15</p>
            </div>
        </div>
    );
};
