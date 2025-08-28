import TitleTag from "@/components/TitleTag";
import WebImage from "@/components/WebImage";

const image = '/imgs/image.webp'

export default function LogofolioMain() {
    return (
        <section className="full center justify-around gap-8 min-h-screen">

            <div className="center flex-col w-full gap-8 max-w-[35%] relative">

                <div className="absolute z-50 -top-16 -left-16">
                    <TitleTag text="Moonut" fontSize={24} paddingY={12} paddingX={20} />
                </div>

                <div className="relative full">
                    <WebImage image={image} />
                </div>

            </div>

            <div className="center flex-col w-full max-w-[20%]">
                <WebImage image={image} />
                <WebImage image={image} />
            </div>

            <div className="center flex-col w-full max-w-[20%]">
                <WebImage image={image} />
                <WebImage image={image} />
            </div>
        </section>
    );
};
