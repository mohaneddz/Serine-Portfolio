"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SimpleTitleTag from "@/components/SimpleTitleTag";
import WebImage from "@/components/WebImage";

export default function LogofolioMain({ id }: { id: number }) {
  const image = `/imgs/projects/${id}/`;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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

      <div className="absolute z-50 top-0 left-0" data-aos="fade-down">
        <SimpleTitleTag text={`Moonut ${id}`} />
      </div>

      <div className="center flex-col w-full gap-8 max-w-[35%]">
        <div className="relative full" data-aos="fade-up" data-aos-delay={0}>
          <WebImage id={1} image={image + '1.png'} />
        </div>
      </div>

      <div className="center flex-col w-full max-w-[20%]">
        {images.slice(1, 3).map((img, index) => (
          <div key={img.id} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
            <WebImage id={img.id} image={image + img.src} />
          </div>
        ))}
      </div>

      <div className="center flex-col w-full max-w-[20%]">
        {images.slice(3, 5).map((img, index) => (
          <div key={img.id} data-aos="fade-up" data-aos-delay={(index + 3) * 100}>
            <WebImage id={img.id} image={image + img.src} />
          </div>
        ))}
      </div>

    </section>
  );
}
