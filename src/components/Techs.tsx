import { SlBadge } from "react-icons/sl";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiRustfs,
  SiRust,
  SiGit,
  SiFigma,
  SiReact,
} from "react-icons/si";
import { DiRust } from "react-icons/di";
import { FaReact, FaRust } from "react-icons/fa6";

interface TechnologyCard {
  icon: React.ReactNode;
  title: string;
}
interface Section {
  title: string;
  cards: Array<TechnologyCard>;
}

const technologies: TechnologyCard[] = [
  { icon: <SiTypescript className="size-4" />, title: "Typescript" },
  { icon: <SiReact className="size-4" />, title: "React.js" },
  { icon: <SiNextdotjs className="size-4" />, title: "Next.js" },
  { icon: <SiTailwindcss className="size-4" />, title: "TailwindCSS" },
  { icon: <SiFigma className="size-4" />, title: "Figma" },
  { icon: <SiRust className="size-4" />, title: "Rust" },
  { icon: <SiGit className="size-4" />, title: "Git" },
];

export const Techs = () => {
  return (
    <section className="mt-10 flex flex-col gap-3">
      <h2 className="flex items-center gap-2 text-2xl font-mono text-foreground">
        <FaReact />
        Frontend Developer + <FaRust /> Rust
      </h2>
      <p>
        I like bringing worthey ideas into sleek designs. Development process is
        what I enjoy the most. Results are the cherry on top.
      </p>

      <div className="flex flex-col gap-6 md:gap-2">
        <div className="flex flex-wrap gap-3">
          {technologies.map((card, index) => {
            return (
              <h3
                key={index}
                className="bg-card hover:bg-card/80 text-white/60 group-hover:rotate-1 transition-all duration-500 ease-in-out text-sm text-foreground/90 border border-dashed flex gap-2 items-center px-2 py-1 flex-1 rounded-sm"
              >
                {card.icon}
                {card.title}
              </h3>
            );
          })}
        </div>
      </div>
    </section>
  );
};
