import { SlBadge } from "react-icons/sl";
import { SiGit, SiNextdotjs, SiTailwindcss, SiTypescript, SiSupabase, SiJavascript } from "react-icons/si";

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
	{ icon: <SiJavascript className="size-4" />, title: "Typescript" },

	// { icon: <SiNextdotjs className="size-6.5" />, title: "Next js", description: "Build Framework" },
	// { icon: <SiTailwindcss className="size-6.5" />, title: "Tailwind", description: "CSS, but fun" },
	// { icon: <SiGit className="size-6.5" />, title: "Git", description: "Version Control" },
	// { icon: <SiSupabase className="size-6.5" />, title: "Supabase", description: "Backend, as needed" },
];
const frameworks: TechnologyCard[] = [];

const sections: Array<Section> = [
	{ title: "Languages", cards: languages },
	{ title: "Library / Framworks", cards: frameworks },
];

export const Techs = () => {
	return (
		<section className="w-body mt-25 flex-primary">
			<h2 className="flex items-start gap-2 text-xl lg:text-2xl">
				<SlBadge className="size-6 text-lg lg:text-xl font-[100] mt-1" />
				Frontend Developer & Web Designer
			</h2>

			<div className="text-body">I build clean, responsive website with keen attention to details</div>

			<div className="flex flex-col gap-1">
				{sections.map((section, index) => {
					return (
						<div key={index} className="">
							<label className="">{section.title}</label>

							<div className="flex">
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
		<div className="group flex gap-2 md:min-w-42 w-fit px-2 py-1 hover:bg-zinc-900 transition-all duration-500 ease-in-out rounded-xl border-dashed">
			<div className="pt-1 text-3xl text-gray-300 group-hover:-rotate-5 transition-all duration-500 ease-in-out">
				{props.icon}
			</div>

			<h3 className="text-white/70 group-hover:rotate-1 transition-all duration-500 ease-in-out">{props.title}</h3>
		</div>
	);
};
