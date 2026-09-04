import { FaGithub } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

interface Link {
	label: string;
	icon: any;
	href: string;
}
interface Technology {
	icon: React.ReactNode;
	title: string;
}

const technologies: Technology[] = [
	{ icon: <SiTypescript className="size-4" />, title: "Typescript" },
	{ icon: <SiNextdotjs className="size-4" />, title: "Nextjs" },
	{ icon: <SiTailwindcss className="size-4" />, title: "Tailwindcss" },
];

const links: Array<Link> = [{ label: "Github", icon: FaGithub, href: "https://github.com/MrKharel" }];

export const Hero = () => {
	return (
		<section className="section pt-12 sm:pt-45 flex flex-col gap-8 relative">
			<h2 className="font-title text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] tracking-tighter animate-[fade-from-down_1s]">
				Frontend Developer <br />& <span className="text-violet-400">UI/UX Designer</span>
			</h2>
			{/* Body text with improved readability */}
			<div className="text-body max-w-xl space-y-4 animate-[fade-from-right_1s]">
				<p className="text-base sm:text-lg text-white/80 leading-relaxed">
					3 years of coding experience. I'm a freshmen highschooler who also happens to have a lil interest in deep
					problem solving and <b>building fun things</b>.
				</p>
				<p className="text-sm text-white/50 font-mono tracking-wide">
					Better to take time shipping than have undesired product
				</p>
			</div>
			{/* Socials - redesigned as pills */}
			<nav className="flex flex-wrap gap-3 items-center animate-[fade-from-right_1.5s]">
				{links.map((link, index) => (
					<a
						key={index}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex items-center gap-2.5 px-2 rounded-full">
						<link.icon className="w-4 h-4 text-white/60 group-hover:text-primary transition-colors" />
						<span className="text-sm font-mono text-white/70 group-hover:text-white transition-colors">
							{link.label}
						</span>
					</a>
				))}

				{/* Location - distinct styling */}
				<div className="flex items-center gap-2.5">
					<IoLocationOutline className="w-4 h-4 text-primary/60" />
					<a
						href="https://en.wikipedia.org/wiki/Jhapa_District"
						target="_blank"
						rel="noopener noreferrer"
						className="text-sm font-mono text-white/60 hover:text-white transition-colors duration-300">
						Jhapa, Nepal
					</a>
				</div>
			</nav>
			{/* Technologies I use */}
			<div className="flex flex-wrap gap-2 md:gap-4 animate-[fade-from-up_2s]">
				{technologies.map((tech, index) => {
					return (
						<div
							key={index}
							className="flex-1 sm:flex-0 flex gap-2 items-center text-white/70 text-xs md:text-sm border border-dashed border-white/10 rounded px-2 md:px-4 py-1.5">
							{tech.icon} {tech.title}
						</div>
					);
				})}
			</div>
		</section>
	);
};
