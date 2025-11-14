import Image from "next/image";
import Link from "next/link";

import SimpleTitleTag from "@/components/SimpleTitleTag";
import TextBox from "@/components/TextBox";
import AOS from "@/components/AOS";

const webWindow = '/svgs/misc/web-window.svg'

const folder = '/svgs/g2km/folder.svg'
const heartPopup = '/svgs/g2km/heart popup.svg'

const x = '/svgs/icons/x.svg'
const cursor = '/svgs/icons/cursor.svg'

const phone = '/svgs/icons/phone.svg'
const email = '/svgs/icons/email.svg'
const instagram = '/svgs/icons/instagram.svg'
const facebook = '/svgs/icons/facebook.svg'
const linkedin = '/svgs/icons/linkedin.svg'
const behance = '/svgs/icons/behance.svg'

const pfp = '/imgs/pfp.png'

const text = "serina here! I‘m an artist and a graphic designer\nfor 5 years, i specialize in visual identity design\nand social media posters"

export default function G2KM() {
    return (
        <section className="min-h-screen h-full py-24 center w-screen pl-16">

            <div className="center justify-between w-full">

                <AOS animation="fade-up" delay={0}>
                    <div className="w-full max-w-[60%] relative">

                        <AOS animation="fade-up" delay={0.1}>
                            <SimpleTitleTag text="G2KM" className="absolute -top-14 left-2 z-30" />
                        </AOS>
                        <AOS animation="fade-up" delay={0.2}>
                            <TextBox text={text} className="relative" />
                        </AOS>

                        <AOS animation="fade-up" delay={0.3}>
                            <div className="flex gap-8 items-end">

                                <AOS animation="fade-up" delay={0.4}>
                                    <div className="relative bg-primary-dim w-16 mt-8 rounded-md">

                                        <AOS animation="fade-up" delay={0.5}>
                                            <div className="bg-primary w-full h-min flex justify-end rounded-t-md">
                                                <Image src={x} alt="X Icon" width={8} height={8} className="m-2" />
                                            </div>
                                        </AOS>

                                        <AOS animation="fade-up" delay={0.6}>
                                            <div className="center flex-col py-4 gap-4 rounded-md">
                                                <AOS animation="fade-up" delay={0.7}>
                                                    <Link href="tel:+1234567890" className="center hover-social">
                                                        <Image src={phone} alt="Phone Icon" width={32} height={32} />
                                                    </Link>
                                                </AOS>
                                                <AOS animation="fade-up" delay={0.8}>
                                                    <Link href="mailto:example@example.com" className="center hover-social">
                                                        <Image src={email} alt="Email Icon" width={32} height={32} />
                                                    </Link>
                                                </AOS>

                                                <AOS animation="fade-up" delay={0.9} className="p-2">
                                                    <div className="center flex-col gap-4 border-dashed border-2 border-white p-2 relative">
                                                        <Image src={cursor} alt="Cursor Icon" width={32} height={32} className="absolute -right-8 -top-1" />

                                                        <AOS animation="fade-up" delay={1}>
                                                            <Link href="https://www.instagram.com/example" className="center hover-social">
                                                                <Image src={instagram} alt="Instagram Icon" width={32} height={32} />
                                                            </Link>
                                                        </AOS>
                                                        <AOS animation="fade-up" delay={1.1}>
                                                            <Link href="https://www.facebook.com/example" className="center hover-social">
                                                                <Image src={facebook} alt="Facebook Icon" width={24} height={24} />
                                                            </Link>
                                                        </AOS>
                                                        <AOS animation="fade-up" delay={1.2}>
                                                            <Link href="https://www.linkedin.com/in/example" className="center hover-social">
                                                                <Image src={linkedin} alt="LinkedIn Icon" width={32} height={32} />
                                                            </Link>
                                                        </AOS>
                                                        <AOS animation="fade-up" delay={1.3}>
                                                            <Link href="https://www.behance.net/example" className="center hover-social">
                                                                <Image src={behance} alt="Behance Icon" width={32} height={32} />
                                                            </Link>
                                                        </AOS>
                                                    </div>
                                                </AOS>

                                            </div>
                                        </AOS>

                                    </div>
                                </AOS>

                                <AOS animation="fade-up" delay={1.4}>
                                    <div className="flex gap-8">

                                        {["resume", "logofolio", "posters"].map((label, i) => (
                                            <AOS animation="fade-up" delay={-1.5 + i * 0.1} key={label}>
                                                <Link className="center flex-col" href={`/${label === "social media" ? "social" : label}`}>
                                                    <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                                    <p className="text-primary-dim font-black text-md">{label}</p>
                                                </Link>
                                            </AOS>
                                        ))}

                                    </div>
                                </AOS>

                            </div>
                        </AOS>

                    </div>
                </AOS>

                <AOS animation="fade-up" delay={1} className="max-w-[40%]">
                    <div className="w-full relative">

                        <AOS animation="fade-up" delay={1.1}>
                            <Image src={webWindow} alt="Web Window" width={800} height={600} className="w-full" />
                        </AOS>

                        <AOS animation="fade-up" delay={1.2}>
                            <div className="absolute -bottom-4 -left-28 hover-scale">
                                <AOS animation="fade-up" delay={1}>
                                    <Image src={heartPopup} alt="Heart Popup" width={80} height={80} className="absolute -top-12 left-4 z-30 animate-float" />
                                </AOS>
                                <AOS animation="fade-up" delay={0.4}>
                                    <Image src={pfp} alt="Profile Picture" width={240} height={240} className="animate-float" />
                                </AOS>
                            </div>
                        </AOS>

                    </div>
                </AOS>

            </div>

        </section>
    );
};
