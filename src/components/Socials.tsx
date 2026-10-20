import { Suspense } from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaGithub, FaMapLocation } from "react-icons/fa6";

import { Avatar, AvatarImage } from "./ui/avatar";

import type { ReactNode } from "react";

interface TechnologyCard {
  url?: string;
  title: ReactNode;
  icon: ReactNode;
}

export const Socials = () => {
  const technologies: TechnologyCard[] = [
    {
      icon: <FaGithub />,
      title: (
        <>
          <Suspense>
            <GithubProfile />
          </Suspense>
          https://github.com/MrKharel
        </>
      ),
      url: "https://github.com/MrKharel",
    },
    { icon: <FaMailBulk />, title: <>ajeshkharel5@gmail.com</> },
    { icon: <FaMapLocation />, title: <>Jhapa, Nepal</> },
  ];

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

const GithubProfile = async () => {
  const profile = (await fetch("https://api.github.com/users/MrKharel")
    .then((profile) => profile.json())
    .catch(() => null)) as { avatar_url: string } | null;
  if (!profile?.avatar_url) return null;
  return (
    <Avatar className={"w-4 h-4"}>
      <AvatarImage src={profile.avatar_url} />
    </Avatar>
  );
};
