"use server";

import { Header, Hero, Projects } from "@/components";

export default async function LandingPage() {
  return (
    <div className="max-w-xl self-center flex flex-col gap-15 mb-15">
      <Header />
      <Hero />
      <Projects />
    </div>
  );
}
