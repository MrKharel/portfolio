import { Logo, NavButton, type NavButtonProps as NavButtonType } from "@/ui";

interface HeaderProps {
	title?: string;
}

const navBtns: Array<NavButtonType> = [
	{ label: "Home", href: "/" },
	{ label: "Contacts", href: "/#contacts" },
];

export const Header = (props: HeaderProps) => {
	return (
		<header className="px-6 lg:px-[10vw] w-screen h-16 self-center flex justify-between items-center">
			<Logo title={props.title} />

			<nav className="flex gap-4">
				{navBtns.map((btn, index) => {
					return <NavButton key={index} {...btn} />;
				})}
			</nav>
		</header>
	);
};
