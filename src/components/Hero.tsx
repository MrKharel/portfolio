import { FaGithub } from "react-icons/fa6";

interface Link {
	label: string;
	icon: any;
	href: string;
}

const links: Array<Link> = [{ label: "Github", icon: FaGithub, href: "" }];

export const Hero = () => {
	return (
		<section className="w-body self-center flex flex-col gap-4 px-6">
			<h2 className="font-title mt-12 font-mono text-2xl">
				Hi, I'm <span className="red-highlight">Ajesh Kharel</span>
			</h2>

			<p className="text-white/70">
				I'm currently in highschool, and am learning to code as a side hobby. I'm 14 year old, and learning to code on
				my own.
			</p>

			<nav className="flex gap-4">
				{links.map((link, index) => {
					return (
						<div key={index} className="flex gap-2 items-center transition-all duration-200 ease-in-out w-fit">
							{<link.icon />}
							<a href={link.href} className="text-white/70">
								{link.label}
							</a>
						</div>
					);
				})}
			</nav>
		</section>
	);
};
