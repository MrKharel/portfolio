import { FaGithub } from "react-icons/fa6";

interface Link {
	label: string;
	icon: any;
	href: string;
}

const links: Array<Link> = [{ label: "Github", icon: FaGithub, href: "" }];

export const Hero = () => {
	return (
		<section className="w-body flex-primary">
			<h2 className="font-title mt-12 font-mono text-3xl lg:text-4xl font-bold">
				Hi, I'm <span className="red-highlight">Ajesh Kharel</span>
			</h2>

			<div className="text-body lg:max-w-120">
				<p>
					An aspiring <strong>front-end developer</strong> from <u>Nepal</u>.<br />
				</p>

				<p className="mt-2">
					Currently, I'm <strong>14 year old, freshmen year of highschool</strong>, spending my time{" "}
					<strong>learning to code</strong>.
				</p>
			</div>

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
