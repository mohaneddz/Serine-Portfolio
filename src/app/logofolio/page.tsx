"use client";

import Return from "@/components/Return";
import LogofolioMain from "@/sections/LogofolioMain";
import LogofolioProjects from "@/sections/LogofolioProjects";

import { useState } from "react";

export default function LogofolioLayout() {

  const [id, setId] = useState(1);

  function changeLogo(id: number) {
    setId(id);
    window.scrollTo({ top: 0});
  }

  return (
    <main className="full center flex-col min-h-screen py-8 pl-16">
      
      <LogofolioMain id={id} />
      <LogofolioProjects changeLogo={changeLogo} />

      <Return />
    </main>
  );
}
