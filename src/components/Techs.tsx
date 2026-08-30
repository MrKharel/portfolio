import { CgPentagonUp } from "react-icons/cg";
import { SiGit, SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase } from "react-icons/si";

interface TechnologyCard {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const techCards: TechnologyCard[] = [
	{ icon: <SiTypescript className="size-6.5" />, title: "Typescript", description: "Javascript, but better" },
	{ icon: <SiNextdotjs className="size-6.5" />, title: "Next js", description: "Build Framework" },
	{ icon: <SiTailwindcss className="size-6.5" />, title: "Tailwind", description: "CSS, but fun" },
	{ icon: <SiGit className="size-6.5" />, title: "Git", description: "Version Control" },
	{ icon: <SiSupabase className="size-6.5" />, title: "Supabase", description: "Backend, as needed" },
];

export const Techs = () => {
	return (
		<section className="w-body mt-20 flex-primary">
			<h2 className="flex items-center gap-2 text-xl lg:text-2xl">
				<CgPentagonUp className="size-8 text-xl font-[100]" /> <span className="">Front-end</span> Developer & Web
				Designer
			</h2>

			<div className="text-body">I build clean, responsive website with keen attention to details</div>

			<div className="flex flex-wrap gap-4">
				{techCards.map((card, index) => {
					return <TechnologyCard key={index} {...card} />;
				})}
			</div>
		</section>
	);
};

const TechnologyCard = (props: TechnologyCard) => {
	return (
		<div className="group flex gap-2 min-w-50 w-fit px-4 py-2 flex-1 bg-zinc-900 hover:bg-neutral-50/10 transition-all duration-500 ease-in-out rounded-xl">
			<div className="pt-1 text-3xl text-gray-300 group-hover:-rotate-5 transition-all duration-500 ease-in-out">
				{props.icon}
			</div>

			<div className="flex flex-col gap-0.5">
				<h3 className="text-white/70 group-hover:rotate-1 transition-all duration-500 ease-in-out">{props.title}</h3>

				<p className="font-[300] text-xs leading-relaxed line-clamp-1 group-hover:scale-95 group-hover:-translate-x-1 transition duration-500">
					{props.description || "No description available"}
				</p>
			</div>
		</div>
	);
};
