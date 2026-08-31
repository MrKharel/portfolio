import { SlStar } from "react-icons/sl";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { RiTerminalFill } from "react-icons/ri";

interface FeatureCard {
	title: string;
	description: string;
	img: string;
	tags: string[];
	href?: string;
	repo?: string;
}

const projects: FeatureCard[] = [
	{
		title: "games-repository",
		description: "A growing collection of small browser games — built for fun, shipped for practice.",
		img: "/games-repo.png",
		tags: ["typescript", "canvas", "vite"],
		repo: "https://github.com/yourname/games-repository",
	},
	{
		title: "chess-engine",
		description: "A from-scratch chess engine with move generation, search, and a simple eval function.",
		img: "/chess-engine.png",
		tags: ["rust", "minimax", "wasm"],
		repo: "https://github.com/yourname/chess-engine",
	},
];

export const Projects = () => {
	return (
		<section id="projects" className="w-body mt-25 flex-primary">
			<h2 className="flex items-center gap-2 text-xl lg:text-2xl">
				<SlStar className="mb-1" />
				Featured Projects
			</h2>

			<div className="flex flex-col md:flex-row gap-4 px-12 md:px-0">
				{projects.map((project) => (
					<FeatureCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
};

const FeatureCard = (props: FeatureCard) => {
	return (
		<div className="font-mono bg-[#1E1E24] flex-1 w-full rounded-xl border border-white/5 shadow-lg shadow-black/20 hover:border-white/8 hover:-translate-y-0.5 transition-all duration-500 overflow-hidden flex flex-col group">
			{/* Title bar */}
			<div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
				<div className="flex gap-2">
					<div className="size-2.5 rounded-full bg-red-400/80"></div>
					<div className="size-2.5 rounded-full bg-yellow-400/80"></div>
					<div className="size-2.5 rounded-full bg-green-400/80"></div>
				</div>
				<span className="text-[10px] text-white/30 tracking-wide flex items-center gap-2">
					<RiTerminalFill className="size-4" /> zsh
				</span>
			</div>

			<div className="flex flex-col gap-4 p-4">
				<div className="flex flex-col gap-1">
					<h3 className="text-sm text-white/80 group-hover:text-white/95 tracking-tight transition-colors">
						<span className="text-emerald-400/70">~/projects</span>
						<span className="text-white/30"> $ </span>
						cd {props.title.toLowerCase().replaceAll(" ", "-")}
						<span className="inline-block w-[6px] h-[13px] bg-white/70 ml-1 align-middle animate-pulse" />
					</h3>
				</div>

				<p className="text-xs text-white/50 group-hover:text-white/60 leading-relaxed transition-colors duration-500">
					{props.description}
				</p>

				<div className="rounded-lg overflow-hidden border border-white/5">
					<img
						src={props.img}
						alt={props.title}
						className="w-full aspect-video object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
					/>
				</div>

				<div className="flex flex-wrap gap-1.5">
					{props.tags.map((tag) => (
						<span
							key={tag}
							className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/5">
							{tag}
						</span>
					))}
				</div>

				<div className="flex items-center gap-4 mt-1 text-[11px] text-white/40">
					{props.repo && (
						<a
							href={props.repo}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
							<FiGithub className="size-3.5" />
							source
						</a>
					)}
					{props.href && (
						<a
							href={props.href}
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
							<FiExternalLink className="size-3.5" />
							live
						</a>
					)}
				</div>
			</div>
		</div>
	);
};
