import Image from "next/image";
import Link from "next/link";

import TitleTag from "@/components/TitleTag";   
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

                <div className="w-full max-w-[60%] relative">

                    <TitleTag text="Manaa serine" fontSize={32} paddingY={18} paddingX={32} className="absolute -top-24" />
                    <TextBox text={text} className="relative" />

                    <div className="flex gap-8 items-end">

                        <div className="relative bg-primary-dim w-16 mt-8 rounded-md">

                            <div className="bg-primary w-full h-min flex justify-end rounded-t-md">
                                <Image src={x} alt="X Icon" width={8} height={8} className="m-2" />
                            </div>

                            <div className="center flex-col py-4 gap-4 rounded-md">
                                <Link href="tel:+1234567890" className="center hover-social">
                                    <Image src={phone} alt="Phone Icon" width={32} height={32} />
                                </Link>
                                <Link href="mailto:example@example.com" className="center hover-social">
                                    <Image src={email} alt="Email Icon" width={32} height={32} />
                                </Link>

                                <div className="center flex-col gap-4 border-dashed border-2 border-white p-2 relative">
                                    <Image src={cursor} alt="Cursor Icon" width={32} height={32} className="absolute -right-5 -top-1" />

                                    <Link href="https://www.instagram.com/example" className="center hover-social">
                                        <Image src={instagram} alt="Instagram Icon" width={32} height={32} />
                                    </Link>
                                    <Link href="https://www.facebook.com/example" className="center hover-social">
                                        <Image src={facebook} alt="Facebook Icon" width={24} height={24} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/example" className="center hover-social">
                                        <Image src={linkedin} alt="LinkedIn Icon" width={32} height={32} />
                                    </Link>
                                    <Link href="https://www.behance.net/example" className="center hover-social">
                                        <Image src={behance} alt="Behance Icon" width={32} height={32} />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="flex gap-8">

                            <Link className="center flex-col" href="/resume">
                                <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                <p className="text-primary-dim font-black text-md">resume</p>
                            </Link>

                            <Link className="center flex-col" href="/logofolio">
                                <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                <p className="text-primary-dim font-black text-md">logofolio</p>
                            </Link>

                            <Link className="center flex-col" href="/branding">
                                <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                <p className="text-primary-dim font-black text-md">branding</p>
                            </Link>

                            <Link className="center flex-col" href="/posters">
                                <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                <p className="text-primary-dim font-black text-md">posters</p>
                            </Link>

                            <Link className="center flex-col" href="/social">
                                <Image src={folder} alt="Folder" width={64} height={64} className="hover-social" />
                                <p className="text-primary-dim font-black text-md">social media</p>
                            </Link>

                        </div>

                    </div>

                </div>

                <div className="w-full max-w-[40%] relative">

                    <Image src={webWindow} alt="Web Window" width={800} height={600} className="w-full" />

                    <div className="absolute -bottom-4 -left-28 hover-scale">
                        <Image src={heartPopup} alt="Heart Popup" width={80} height={80} className="absolute -top-12 left-4" />
                        <Image src={pfp} alt="Profile Picture" width={240} height={240} className="" />
                    </div>

                </div>

            </div>

        </section>
    );
};
