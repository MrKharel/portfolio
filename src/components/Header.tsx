import { Logo, NavButton, type NavButtonProps as NavButtonType } from "@/ui";

interface HeaderProps {
	title: string;
}

const navBtns: Array<NavButtonType> = [
	{ label: "home", href: "/" },
	{ label: "projects", href: "#projects" },
];

export const Header = (props: HeaderProps) => {
	return (
		<header className="px-6 lg:px-[10vw] w-screen h-16 self-center flex justify-between items-center fixed top-0 backdop-blur-[10px] border-b border-white/10 bg-black/10">
			<Logo title={props.title} />

			<nav className="flex gap-2 md:gap-4">
				{navBtns.map((btn, index) => {
					return <NavButton key={index} {...btn} />;
				})}
			</nav>
		</header>
	);
};
