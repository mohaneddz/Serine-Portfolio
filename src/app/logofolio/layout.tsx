import Return from "@/components/Return";

export default function LogofolioLayout({
  main,
  grid,
}: {
  main: React.ReactNode;
  grid: React.ReactNode;
}) {
  return (
    <main className="full center flex-col min-h-screen py-8 pl-16">
      {main}
      {grid}
      <Return />
    </main>
  );
}
