import SimpleTitleTag from "@/components/SimpleTitleTag";
import WebImage from "@/components/WebImage";
import Link from "next/link";

    const image = `/imgs/projects/`;

export default function LogofolioProjects() {
  return (
    <div className="full min-h-screen relative pt-24 pr-8">

      <div className="absolute z-50 top-0 left-0">
        <SimpleTitleTag text="MORE SAMPLES" />
      </div>

      <div className="w-full grid grid-cols-4 gap-8 ">
        <Link href="/logofolio/1">
          <WebImage id={6} image={image + '1.png'} hover />
        </Link>
        <Link href="/logofolio/2">
          <WebImage id={7} image={image + '2.png'} hover />
        </Link>
        <Link href="/logofolio/3">
          <WebImage id={8} image={image + '3.png'} hover />
        </Link>
        <Link href="/logofolio/4">
          <WebImage id={9} image={image + '4.png'} hover />
        </Link>
        <Link href="/logofolio/5">
          <WebImage id={10} image={image + '5.png'} hover />
        </Link>
      </div>

    </div>
  );
};
