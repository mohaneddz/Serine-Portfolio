import Image from "next/image";

import TitleTag from "@/components/TitleTag";

const ae = '/svgs/resume/ae.svg'
const ai = '/svgs/resume/ai.svg'
const ps = '/svgs/resume/ps.svg'

const ae_slider = '/svgs/resume/ae-slider.svg'
const ai_slider = '/svgs/resume/ai-slider.svg'
const ps_slider = '/svgs/resume/ps-slider.svg'

export default function page() {
  return (
    <main className="full min-h-screen grid lg:grid-cols-2 py-8 pl-16">

      <div className="full relative">

        <TitleTag text="EDUCATION" fontSize={24} paddingY={12} paddingX={20} />

        <div className="flex flex-col gap-8 my-8">

          <div>
            <h1 className="text-3xl font-black text-primary-dim">SOLATECH ACADEMY</h1>
            <p className="text-xl ml-8 text-primary-light">Graphic design certificate</p>
          </div>

          <div>
            <h1 className="text-3xl font-black text-primary-dim">CONSTANTINE UNIVERSITY</h1>
            <p className="text-xl ml-8 text-primary-light">Pharmacy Doctor Student</p>
          </div>

        </div>

        <TitleTag text="SKILLS" fontSize={24} paddingY={12} paddingX={20} />

        <div className="flex flex-col gap-8 my-8 ml-1">
          <div className="flex gap-4 hover-scale">
            <Image src={ae} alt="Adobe After Effects" width={50} height={50} />
            <Image src={ae_slider} alt="Adobe After Effects" width={200} height={50} />
          </div>
          <div className="flex gap-4 hover-scale">
            <Image src={ai} alt="Adobe Illustrator" width={50} height={50} />
            <Image src={ai_slider} alt="Adobe Illustrator" width={200} height={50} />
          </div>
          <div className="flex gap-4 hover-scale">
            <Image src={ps} alt="Adobe Photoshop" width={50} height={50} />
            <Image src={ps_slider} alt="Adobe Photoshop" width={200} height={50} />
          </div>
        </div>

      </div>

      <div className="full relative">
        <TitleTag text="EXPERIENCE" fontSize={24} paddingY={12} paddingX={20} />

        <div className="flex flex-col gap-8 my-8">

          <div>
            <h1 className="text-3xl font-black text-primary-dim">GRAPHIC DESIGN MANAGER</h1>
            <p className="text-xl ml-8 text-primary-light">EUREKA MEDICAL CLUB</p>
            <p className="text-xl ml-8 text-primary-light">PHARMADOP MEDICAL CLUB</p>
            <p className="text-xl ml-8 text-primary-light">MOSAIC YOUTH ASSOCIATION</p>
          </div>

          <div>
            <h1 className="text-3xl font-black text-primary-dim">CONTENT CREATOR</h1>
            <p className="text-xl ml-8 text-primary-light">AIESEC INTERNATIONAL ASSOCIATION</p>
            <p className="text-xl ml-8 text-primary-light">GDSC CONSTANTINE CLUB</p>
          </div>

          <div>
            <h1 className="text-3xl font-black text-primary-dim">FREELANCE</h1>
            <p className="text-xl ml-8 text-primary-light">ALL THE TIME!</p>
          </div>

        </div>

      </div>

    </main>
  );
};
