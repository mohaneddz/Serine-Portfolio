"use client";

import AOS from "@/components/AOS";

import SimpleTitleTag from "@/components/SimpleTitleTag";
import WebImage from "@/components/WebImage";

export default function LogofolioMain({ id }: { id: number }) {
  const image = `/imgs/projects/${id}/`;

  // Array of all WebImage items with their IDs
  const images = [
    { id: 1, src: '1.png' },
    { id: 2, src: '2.png' },
    { id: 3, src: '3.png' },
    { id: 4, src: '4.png' },
    { id: 5, src: '5.png' },
  ];

  return (
    <section className="full center justify-around gap-8 min-h-screen relative">

      <div className="absolute z-50 top-0 left-0">
        <AOS animation="fade-down">
          <SimpleTitleTag text={`Moonut ${id}`} />
        </AOS>
      </div>

      <div className="center flex-col w-full gap-8 max-w-[35%]">
        <div className="relative full">
          <AOS animation="fade-up" delay={0}>
            <WebImage id={1} image={image + '1.png'} />
          </AOS>
        </div>
      </div>

      <div className="center flex-col w-full max-w-[20%]">
        {images.slice(1, 3).map((img, index) => (
          <AOS key={img.id} animation="fade-up" delay={(index + 1) * 0.1}>
            <WebImage id={img.id} image={image + img.src} />
          </AOS>
        ))}
      </div>

      <div className="center flex-col w-full max-w-[20%]">
        {images.slice(3, 5).map((img, index) => (
          <AOS key={img.id} animation="fade-up" delay={(index + 3) * 0.1}>
            <WebImage id={img.id} image={image + img.src} />
          </AOS>
        ))}
      </div>

    </section>
  );
}
