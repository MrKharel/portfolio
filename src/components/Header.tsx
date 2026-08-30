import { Logo, NavButton, type NavButtonProps as NavButtonType } from "@/ui";

const navBtns: Array<NavButtonType> = [
	{ label: "Home", href: "/" },
	{ label: "Contacts", href: "/#contacts" },
];

export const Header = () => {
	return (
		<header className="px-4 lg:px-0 w-screen max-w-240 h-16 self-center flex justify-between items-center">
			<Logo />

			<nav className="flex gap-4">
				{navBtns.map((btn, index) => {
					return <NavButton key={index} {...btn} />;
				})}
			</nav>
		</header>
	);
};
