import SimpleTitleTag from "@/components/SimpleTitleTag";
import WebImage from "@/components/WebImage";


export default async function LogofolioMain({ params }: { params: { id: string } }) {
    const { id } = await params;
    const image = `/imgs/projects/${id}/`;

    return (
        <section className="full center justify-around gap-8 min-h-screen relative">

            <div className="absolute z-50 top-0 left-0">
                <SimpleTitleTag text={`Moonut ${id}`} />
            </div>

            <div className="center flex-col w-full gap-8 max-w-[35%]">
                <div className="relative full">
                    <WebImage id={1} image={image + '1.png'} />
                </div>
            </div>

            <div className="center flex-col w-full max-w-[20%]">
                <WebImage id={2} image={image + '2.png'} />
                <WebImage id={3} image={image + '3.png'} />
            </div>

            <div className="center flex-col w-full max-w-[20%]">
                <WebImage id={4} image={image + '4.png'} />
                <WebImage id={5} image={image + '5.png'} />
            </div>
        </section>
    );
}
