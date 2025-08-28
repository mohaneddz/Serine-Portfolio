import Image from "next/image";

const title = '/svgs/hero/hero title.svg'
const sidecolors = '/svgs/hero/hero sidecolors.svg'
const star = '/svgs/misc/star.svg'

import HeroPlayer from "@/components/HeroPlayer";
import TitleTag from "@/components/TitleTag";

export default function Hero() {
    return (
        <section className="screen center">

            <div className="full center flex-col gap-8 max-w-5xl">
                <Image src={title} alt="Hero Title" width={800} height={200} className="w-full mb-8" />
                <div className="flex justify-between w-full">
                    <span className="font-black text-3xl text-primary-dim">Manaa serine</span>
                    <Image src={star} alt="Star" width={32} height={32} className="animate-pulse" />
                    <span className="font-black text-3xl text-primary-dim">Graphic Designer</span>
                </div>
                <HeroPlayer />
            </div>


            <Image height={64} width={64} src={sidecolors} alt="Hero Side Colors" className="absolute right-8" />
        </section>
    );
};