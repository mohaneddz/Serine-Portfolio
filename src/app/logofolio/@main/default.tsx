import SimpleTitleTag from "@/components/SimpleTitleTag";
import WebImage from "@/components/WebImage";

const image = '/imgs/image.webp'

export default function LogofolioMain() {
    return (
        <section className="full center justify-around gap-8 min-h-screen relative">

                <div className="absolute z-50 top-0 left-0">
                    <SimpleTitleTag text="Moonut" />
                </div>

            <div className="center flex-col w-full gap-8 max-w-[35%]">

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
