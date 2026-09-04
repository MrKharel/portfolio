import { Logo } from "@/ui";

interface HeaderProps {
	title: string;
}

export const Header = (props: HeaderProps) => {
	return (
		<header className="px-6 lg:px-[10vw] w-screen h-22 self-center flex justify-between items-center fixed top-0">
			<Logo title={props.title} />
		</header>
	);
};
