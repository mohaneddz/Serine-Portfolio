import LogofolioMain from "@/sections/LogofolioMain";
import LogofolioProjects from "@/sections/LogofolioProjects";

export default function page() {
  return (
    <main className="full center flex-col min-h-screen py-8 pl-16">
      <LogofolioMain />
      <LogofolioProjects />
    </main>
  );
};
