import Image from "next/image";

import SimpleTitleTag from "@/components/SimpleTitleTag";
import Return from "@/components/Return";

const ae = '/svgs/resume/ae.svg';
const ai = '/svgs/resume/ai.svg';
const ps = '/svgs/resume/ps.svg';

const ae_slider = '/svgs/resume/ae-slider.svg';
const ai_slider = '/svgs/resume/ai-slider.svg';
const ps_slider = '/svgs/resume/ps-slider.svg';

const education = [
  { title: "SOLATECH ACADEMY", subtitle: "Graphic design certificate" },
  { title: "CONSTANTINE UNIVERSITY", subtitle: "Pharmacy Doctor Student" },
];

const skills = [
  { icon: ae, slider: ae_slider, alt: "Adobe After Effects" },
  { icon: ai, slider: ai_slider, alt: "Adobe Illustrator" },
  { icon: ps, slider: ps_slider, alt: "Adobe Photoshop" },
];

const experience = [
  {
    title: "GRAPHIC DESIGN MANAGER",
    items: ["EUREKA MEDICAL CLUB", "PHARMADOP MEDICAL CLUB", "MOSAIC YOUTH ASSOCIATION"],
  },
  {
    title: "CONTENT CREATOR",
    items: ["AIESEC INTERNATIONAL ASSOCIATION", "GDSC CONSTANTINE CLUB"],
  },
  {
    title: "FREELANCE",
    items: ["ALL THE TIME!"],
  },
];

export default function page() {
  return (
    <main className="full min-h-screen grid lg:grid-cols-2 py-8 pl-16">

      {/* LEFT SIDE */}
      <div className="full relative p-8">
        <SimpleTitleTag text="EDUCATION" className="w-max fade-slide-up" style={{ '--delay': '0s' } as React.CSSProperties} />

        <div className="flex flex-col gap-8 my-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="fade-slide-up"
              style={{ '--delay': `${(idx + 1) * 0.2}s` } as React.CSSProperties}
            >
              <h1 className="text-3xl font-black text-primary-dim">{edu.title}</h1>
              <p className="text-xl ml-8 text-primary-light">{edu.subtitle}</p>
            </div>
          ))}
        </div>

        <SimpleTitleTag text="SKILLS" className="w-max fade-slide-up" style={{ '--delay': '0.6s' } as React.CSSProperties} />

        <div className="flex flex-col gap-8 my-8 ml-1">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex gap-4 hover-scale fade-slide-up"
              style={{ '--delay': `${(idx + 1) * 0.2 + 0.6}s` } as React.CSSProperties}
            >
              <Image src={skill.icon} alt={skill.alt} width={50} height={50} />
              <Image src={skill.slider} alt={skill.alt} width={200} height={50} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="full relative p-8">
        <SimpleTitleTag text="EXPERIENCE" className="w-max fade-slide-up" style={{ '--delay': '0s' } as React.CSSProperties} />

        <div className="flex flex-col gap-8 my-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="fade-slide-up"
              style={{ '--delay': `${(idx + 1) * 0.2}s` } as React.CSSProperties}
            >
              <h1 className="text-3xl font-black text-primary-dim">{exp.title}</h1>
              {exp.items.map((item, i) => (
                <p key={i} className="text-xl ml-8 text-primary-light">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Return className="fade-slide-up" style={{ '--delay': '1s' } as React.CSSProperties} />

    </main>
  );
}
