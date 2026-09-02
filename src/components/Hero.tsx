import { FaGithub } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

interface Link {
	label: string;
	icon: any;
	href: string;
}

const links: Array<Link> = [{ label: "Github", icon: FaGithub, href: "https://github.com/MrKharel" }];

export const Hero = () => {
	return (
		<section className="w-body mt-40 flex-primary">
			<h2 className="font-title font-mono text-2xl font-bold leading-10.5 tracking-tighter leading-12">
				Hey, I'm <br /> <span className="text-4xl text-rose-300/80">Ajesh Kharel</span>
			</h2>

			{/* Body text */}
			<div className="text-body max-w-120 [&>p>span]:font-[400]">
				<p>
					For the time being, I'm a freshmen highschooler, learning to code as a side hobby. Its been almost{" "}
					<span>three years</span> since I started to code and I'm lovinn' it.
				</p>

				<p className="mt-2">
					I <span>take the time to ship</span> thoughtfully, and pay close attention to the finer details.
				</p>

				{/* I don't currently have the projects to list here. So, commented it out for now. */}
				{/* <p className="mt-2">
					I choose to build and focus on what genuinely interests me, namely:{" "}
					<a href="" className="typical-link">
						a custom chess engine
					</a>
					, and{" "}
					<a href="" className="typical-link">
						a repository of games I enjoy
					</a>
					.
				</p> */}
			</div>

			{/* Socials */}
			<nav className="flex gap-4">
				{links.map((link, index) => {
					return (
						<div key={index} className="flex gap-2 items-center transition-all duration-200 ease-in-out w-fit group">
							{<link.icon />}
							<a href={link.href} target="_blank" className="text-white/70 group-hover:text-white/90 font-mono">
								{link.label}
							</a>
						</div>
					);
				})}

				<div className="group flex items-center gap-2">
					<IoLocationOutline className="group-hover:text-white/90" />
					<a
						href="https://en.wikipedia.org/wiki/Jhapa_District"
						target="_blank"
						className="text-white/70 group-hover:text-white/90 font-mono transition-all duration-500">
						Jhapa, Nepal
					</a>
				</div>
			</nav>
		</section>
	);
};
