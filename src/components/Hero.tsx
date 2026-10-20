import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Socials } from "./Socials";
import { Techs } from "./Techs";

interface Technology {
  icon: React.ReactNode;
  title: string;
}

const technologies: Technology[] = [
  { icon: <SiTypescript className="size-4" />, title: "Typescript" },
  { icon: <SiNextdotjs className="size-4" />, title: "Nextjs" },
  { icon: <SiTailwindcss className="size-4" />, title: "Tailwindcss" },
];

export const Hero = () => {
  return (
    <section className="flex flex-col gap-3 relative">
      <h2 className="group text-foreground font-mono text-3xl font-medium leading-[1.2] tracking-tight animate-[fade-from-down_1s]">
        <span className="group-hover:animate-wave text-foreground text-3xl">
          👋
        </span>{" "}
        Hi, I am Ajesh Kharel
      </h2>
      <p>
        I am but a mere highschooler intregued by "computers and stuff" as they
        say. I was and still am fascinated by what could be done with them, and
        tinker with them a little bit.
      </p>
      <Socials />
      <Techs />
    </section>
  );
};
