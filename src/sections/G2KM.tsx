import Image from "next/image";
import Link from "next/link";

import SimpleTitleTag from "@/components/SimpleTitleTag";
import TextBox from "@/components/TextBox";

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

                <div className="w-full max-w-[60%] relative fade-slide-up" style={{ "--delay": "3s" } as React.CSSProperties}>

                    <SimpleTitleTag text="G2KM" className="absolute -top-14 left-2 z-30 fade-slide-up" style={{ "--delay": "3.1s" } as React.CSSProperties} />
                    <TextBox text={text} className="relative fade-slide-up" style={{ "--delay": "3.2s" } as React.CSSProperties} />

                    <div className="flex gap-8 items-end fade-slide-up" style={{ "--delay": "3.3s" } as React.CSSProperties}>

                        <div className="relative bg-primary-dim w-16 mt-8 rounded-md fade-slide-up" style={{ "--delay": "3.4s" } as React.CSSProperties}>

                            <div className="bg-primary w-full h-min flex justify-end rounded-t-md fade-slide-up" style={{ "--delay": "3.5s" } as React.CSSProperties}>
                                <Image src={x} alt="X Icon" width={8} height={8} className="m-2" />
                            </div>

                            <div className="center flex-col py-4 gap-4 rounded-md fade-slide-up" style={{ "--delay": "3.6s" } as React.CSSProperties}>
                                <Link href="tel:+1234567890" className="center hover-social fade-slide-up" style={{ "--delay": "3.7s" } as React.CSSProperties}>
                                    <Image src={phone} alt="Phone Icon" width={32} height={32} />
                                </Link>
                                <Link href="mailto:example@example.com" className="center hover-social fade-slide-up" style={{ "--delay": "3.8s" } as React.CSSProperties}>
                                    <Image src={email} alt="Email Icon" width={32} height={32} />
                                </Link>

                                <div className="center flex-col gap-4 border-dashed border-2 border-white p-2 relative fade-slide-up" style={{ "--delay": "3.9s" } as React.CSSProperties}>
                                    <Image src={cursor} alt="Cursor Icon" width={32} height={32} className="absolute -right-8 -top-1" />

                                    <Link href="https://www.instagram.com/example" className="center hover-social fade-slide-up" style={{ "--delay": "4s" } as React.CSSProperties}>
                                        <Image src={instagram} alt="Instagram Icon" width={32} height={32} />
                                    </Link>
                                    <Link href="https://www.facebook.com/example" className="center hover-social fade-slide-up" style={{ "--delay": "4.1s" } as React.CSSProperties}>
                                        <Image src={facebook} alt="Facebook Icon" width={24} height={24} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/example" className="center hover-social fade-slide-up" style={{ "--delay": "4.2s" } as React.CSSProperties}>
                                        <Image src={linkedin} alt="LinkedIn Icon" width={32} height={32} />
                                    </Link>
                                    <Link href="https://www.behance.net/example" className="center hover-social fade-slide-up" style={{ "--delay": "4.3s" } as React.CSSProperties}>
                                        <Image src={behance} alt="Behance Icon" width={32} height={32} />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="flex gap-8 fade-slide-up" style={{ "--delay": "4.4s" } as React.CSSProperties}>

                            {["resume","logofolio","branding","posters","social media"].map((label,i)=>(
                                <Link className="center flex-col fade-slide-up" style={{ "--delay": `${1.5 + i*0.1}s` } as React.CSSProperties} href={`/${label === "social media" ? "social" : label}`} key={label}>
                                    <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                    <p className="text-primary-dim font-black text-md">{label}</p>
                                </Link>
                            ))}

                        </div>

                    </div>

                </div>

                <div className="w-full max-w-[40%] relative fade-slide-up" style={{ "--delay": "4s" } as React.CSSProperties}>

                    <Image src={webWindow} alt="Web Window" width={800} height={600} className="w-full fade-slide-up" style={{ "--delay": "4.1s" } as React.CSSProperties} />

                    <div className="absolute -bottom-4 -left-28 hover-scale fade-slide-up" style={{ "--delay": "4.2s" } as React.CSSProperties}>
                        <Image src={heartPopup} alt="Heart Popup" width={80} height={80} className="absolute -top-12 left-4 fade-slide-up" style={{ "--delay": "4.3s" } as React.CSSProperties} />
                        <Image src={pfp} alt="Profile Picture" width={240} height={240} className="fade-slide-up" style={{ "--delay": "4.4s" } as React.CSSProperties} />
                    </div>

                </div>

            </div>

        </section>
    );
};
