import WebImage from "@/components/WebImage";
import SimpleTitleTag from "@/components/SimpleTitleTag";

const image = '/imgs/image.webp';

const top1 = '/imgs/posters/top1.png'
const top2 = '/imgs/posters/top2.png'
const top3 = '/imgs/posters/top3.png'

export default function page() {
  return (
    <section className="full min-h-screen pl-16 center flex-col gap-8 pr-8">

      <div className="full center flex-col gap-8 min-h-screen">

        <div className="flex w-full">
          <SimpleTitleTag text="MOST NOTABLE DESIGNS" className="left-0" />
        </div>

        <div className="grid grid-cols-3 gap-8 full mb-16">
          <WebImage id={1} image={top1} hover tall />
          <WebImage id={2} image={top2} hover tall />
          <WebImage id={3} image={top3} hover tall />
        </div>

      </div>

      <div className="flex w-full">
        <SimpleTitleTag text="MORE SAMPLES" className="left-0" />
      </div>

      <div className="grid grid-cols-4 gap-4 full">
        <WebImage id={4} image={image} hover tall />
        <WebImage id={5} image={image} hover tall />
        <WebImage id={6} image={image} hover tall />
        <WebImage id={7} image={image} hover tall />
        <WebImage id={8} image={image} hover tall />
        <WebImage id={9} image={image} hover tall />
        <WebImage id={10} image={image} hover tall />
        <WebImage id={11} image={image} hover tall />
        <WebImage id={12} image={image} hover tall />
        <WebImage id={13} image={image} hover tall />
      </div>

    </section>
  );
};
