import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaMapLocation } from "react-icons/fa6";

interface TechnologyCard {
  url: string;
  title: string;
  icon: React.ReactNode;
}

const technologies: TechnologyCard[] = [
  {
    icon: <FaGithub />,
    title: "https://github.com/MrKharel",
    url: "https://github.com/MrKharel",
  },
  { icon: <FaMailBulk />, title: "ajeshkharel5@gmail.com", url: "#" },
  { icon: <FaMapLocation />, title: "Jhapa, Nepal", url: "#" },
];

export const Socials = () => {
  return (
    <section className="flex flex-col gap-1 pl-2">
      <h3 className="text-foreground/70 text-sm -ml-2">socials</h3>

      {technologies.map((tech, index) => (
        <a
          key={index}
          href={tech.url}
          className="text-sm text-foreground/60 hover:text-foreground/75 py-0.5 flex gap-2 items-center"
        >
          {tech.icon}
          {tech.title}
        </a>
      ))}
    </section>
  );
};
