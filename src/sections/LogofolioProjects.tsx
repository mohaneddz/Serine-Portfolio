import WebImage from "@/components/WebImage";
const image = '/imgs/image.webp'

export default function LogofolioProjects () {
  return (
    <div className="full min-h-screen grid grid-cols-4 gap-8">
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
      <WebImage image={image} hover/>
    </div>
  );
};
