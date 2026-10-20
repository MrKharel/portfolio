import { Socials } from "./Socials";

export const Hero = async () => {
  return (
    <section className="flex flex-col gap-3 relative">
      <h2 className="group text-foreground font-mono text-xl md:text-3xl font-medium leading-[1.2] tracking-tight animate-[fade-from-down_1s]">
        <span className="group-hover:animate-wave text-foreground text-xl md:text-3xl">
          👋
        </span>{" "}
        Hi, I am Ajesh Kharel
      </h2>
      <p>
        I am but a mere highschooler intregued by <b>computers and stuff</b> as
        they say. I was and still am fascinated by what could be done with them,
        and tinker with them a little bit.
      </p>
      <Socials />
    </section>
  );
};
