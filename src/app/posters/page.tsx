import WebImage from "@/components/WebImage";
import SimpleTitleTag from "@/components/SimpleTitleTag";
import Return from "@/components/Return";

const image = '/imgs/posters/';

const top1 = '/imgs/posters/top1.png';
const top2 = '/imgs/posters/top2.png';
const top3 = '/imgs/posters/top3.png';

const notable = [top1, top2, top3];
const moreSamples = Array.from({ length: 8 }, (_, i) => `${image}${i + 1}.png`);

export default function page() {
  return (
    <section className="full min-h-screen pl-16 center flex-col gap-8 pr-8">

      <div className="full center flex-col gap-8 min-h-screen">

        <div className="flex w-full fade-slide-up" style={{ '--delay': '0s' } as React.CSSProperties}>
          <SimpleTitleTag text="MOST NOTABLE DESIGNS" className="left-0" />
        </div>

        <div className="grid grid-cols-3 gap-8 full mb-16">
          {notable.map((img, idx) => (
            <div
              key={idx}
              className="fade-slide-up"
              style={{ '--delay': `${(idx + 1) * 0.2}s` } as React.CSSProperties}
            >
              <WebImage id={idx + 1} image={img} hover tall />
            </div>
          ))}
        </div>

      </div>

      <div className="flex w-full fade-slide-up" style={{ '--delay': '0.8s' } as React.CSSProperties}>
        <SimpleTitleTag text="MORE SAMPLES" className="left-0" />
      </div>

      <div className="grid grid-cols-4 gap-4 full">
        {moreSamples.map((img, idx) => (
          console.log(img),
          <div
            key={idx}
            className="fade-slide-up"
            style={{ '--delay': `${(idx + 1) * 0.1 + 0.8}s` } as React.CSSProperties}
          >
            <WebImage id={idx + 4} image={img} hover tall />
          </div>
        ))}
      </div>

      <Return className="fade-slide-up" style={{ '--delay': '2s' } as Record<string, string>} />

    </section>
  );
};
