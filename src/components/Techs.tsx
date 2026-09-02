import { SlBadge } from "react-icons/sl";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiVite } from "react-icons/si";

interface TechnologyCard {
	icon: React.ReactNode;
	title: string;
}
interface Section {
	title: string;
	cards: Array<TechnologyCard>;
}

const languages: TechnologyCard[] = [
	{ icon: <SiTypescript className="size-4" />, title: "Typescript" },
	{ icon: <SiJavascript className="size-4" />, title: "Javascript" },
];
const frameworks: TechnologyCard[] = [
	{ icon: <SiNextdotjs className="size-4" />, title: "Nextjs" },
	{ icon: <SiVite className="size-4" />, title: "Vite" },
	{ icon: <SiTailwindcss className="size-4" />, title: "Tailwindcss" },
];

const sections: Array<Section> = [
	{ title: "Languages", cards: languages },
	{ title: "Frameworks", cards: frameworks },
];

export const Techs = () => {
	return (
		<section className="w-body mt-25 flex-primary">
			<h2 className="flex items-start gap-2 text-xl lg:text-2xl">
				<SlBadge className="size-6 text-lg lg:text-xl font-[100] mt-1" />
				Frontend Developer & Web Designer
			</h2>

			<div className="text-body">I build clean, responsive website with keen attention to details</div>

			<div className="flex flex-col gap-6 md:gap-2">
				{sections.map((section, index) => {
					return (
						<div key={index} className="flex flex-col md:items-center md:grid grid-cols-[1fr_4fr] gap-2 md:gap-4 mt-1">
							<label className="text-white/60 font-[300] font-mono uppercase text-sm">
								0{index + 1} {section.title}
							</label>
							<div className="flex flex-wrap gap-3">
								{section.cards.map((card, index) => {
									return <TechnologyCard key={index} {...card} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

const TechnologyCard = (props: TechnologyCard) => {
	return (
		<div className="group flex gap-2 w-fit px-3 py-2 hover:bg-zinc-900 transition-all duration-500 ease-in-out border border-dashed border-white/10 rounded">
			<div className="pt-1 text-3xl text-gray-300 group-hover:-rotate-2 transition-all duration-500 ease-in-out">
				{props.icon}
			</div>

			<h3 className="text-white/60 group-hover:rotate-1 transition-all duration-500 ease-in-out">{props.title}</h3>
		</div>
	);
};
