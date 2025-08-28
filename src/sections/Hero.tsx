import Image from "next/image";
import HeroPlayer from "@/components/HeroPlayer";

const title = '/svgs/hero/hero title.svg';
const sidecolors = '/svgs/hero/hero sidecolors.svg';
const star = '/svgs/misc/star.svg';

export default function Hero() {
  return (
    <section className="screen center">

      <div className="full center flex-col gap-8 max-w-5xl">
        <Image
          src={title}
          alt="Hero Title"
          width={800}
          height={200}
          className="w-full fade-slide-up"
          style={{ "--delay": "0s" } as React.CSSProperties}
        />

        <div className="flex justify-between w-full fade-slide-up" style={{ "--delay": "0.3s" } as React.CSSProperties}>
          <span className="font-black text-3xl text-primary-dim">Manaa serine</span>
          <Image
            src={star}
            alt="Star"
            width={32}
            height={32}
            className="animate-pulse"
          />
          <span className="font-black text-3xl text-primary-dim">Graphic Designer</span>
        </div>

        <div className="w-full fade-slide-up" style={{ "--delay": "0.6s" } as React.CSSProperties}>
          <HeroPlayer />
        </div>
      </div>

      <Image
        src={sidecolors}
        alt="Hero Side Colors"
        width={64}
        height={64}
        className="absolute right-8 fade-slide-up"
        style={{ "--delay": "0.9s" } as React.CSSProperties}
      />
    </section>
  );
}
