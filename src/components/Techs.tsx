import { FaRegStar } from "react-icons/fa6";
import { SiGit, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

interface TechnologyCard {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const techCards: TechnologyCard[] = [
	{ icon: <SiTypescript className="size-6.5" />, title: "Typescript", description: "Javascript, but better" },
	{ icon: <SiNextdotjs className="size-6.5" />, title: "Next js", description: "" },
	{
		icon: <SiTailwindcss className="size-6.5" />,
		title: "Tailwind",
		description: "Css, but better (and faster). Also maintainable. Also developer friendly.",
	},
	{ icon: <SiGit className="size-6.5" />, title: "Git", description: "Version Control." },
];

export const Techs = () => {
	return (
		<section className="w-body mt-20 flex-primary">
			<h2 className="flex items-center gap-3 text-xl lg:text-2xl">
				<FaRegStar className="text-2xl lg:text-3xl" /> <span className="red-highlight">Front-end</span> Developer & Web
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
		<div className="group flex gap-2 min-w-50 w-fit px-4 py-2 flex-1 bg-white/2 hover:bg-white/5 transition-all duration-500 ease-in-out rounded-xl">
			<div className="pt-1 text-3xl text-gray-300 transition-colors duration-300">{props.icon}</div>

			<div className="flex flex-col gap-0.5">
				<h3 className="text-white/70">{props.title}</h3>

				<p className="text-xs font-[300] text-sm leading-relaxed line-clamp-1">
					{props.description || "No description available"}
				</p>
			</div>
		</div>
	);
};
