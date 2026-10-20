import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRust,
  SiGit,
  SiReact,
  SiHtmx,
} from "react-icons/si";

interface TechnologyCard {
  icon: React.ReactNode;
  title: string;
}

const technologies: TechnologyCard[] = [
  { icon: <SiTypescript className="size-4" />, title: "Typescript" },
  { icon: <SiReact className="size-4" />, title: "React.js" },
  { icon: <SiNextdotjs className="size-4" />, title: "Next.js" },
  { icon: <SiHtmx className="size-4" />, title: "Htmx" },
  { icon: <SiTailwindcss className="size-4" />, title: "TailwindCSS" },
  { icon: <SiRust className="size-4" />, title: "Rust" },
  { icon: <SiGit className="size-4" />, title: "Git" },
];

export const Techs = () => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="flex items-center gap-2 text-2xl font-mono text-foreground">
        <SiReact /> React & <SiRust /> Rust
      </h2>
      <p>
        Nextjs has been my goto for quickly building a full stack web
        application. Recently, I have been making efforts into pivoting towards
        rust and aleady am somewhat profecient in it.
      </p>

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
    </section>
  );
};
