"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SimpleTitleTag from "@/components/SimpleTitleTag";
import WebImage from "@/components/WebImage";

const base = '/imgs/projects/';
const images = [
  { id: 1, src: '1/1.png' },
  { id: 2, src: '2/1.png' },
  { id: 3, src: '3/1.png' },
  { id: 4, src: '4/1.png' },
  { id: 5, src: '5/1.png' },
];

export default function LogofolioProjects({ changeLogo }: { changeLogo: (id: number) => void }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="full min-h-screen relative pt-24">

      <div className="absolute z-50 top-0 left-0" data-aos="fade-down">
        <SimpleTitleTag text="MORE SAMPLES" />
      </div>

      <div className="w-full grid grid-cols-4 gap-8 pr-8">
        {images.map((img, index) => (
          <div key={img.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <WebImage
              id={img.id + 5}
              image={base + img.src}
              hover
              onClick={() => changeLogo(img.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
