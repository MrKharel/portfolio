"use server";

import { Header, Hero, Projects, Techs } from "@/components";

export default async function LandingPage() {
  return (
    <div className="w-screen md:w-xl self-center flex flex-col gap-15 mb-15 px-4">
      <Header />
      <Hero />
      <Techs />
      <Projects />
    </div>
  );
}
