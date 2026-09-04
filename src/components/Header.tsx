import { Logo } from "@/ui";

interface HeaderProps {
	title: string;
}

export const Header = (props: HeaderProps) => {
	return (
		<header className="px-4 lg:px-[11vw] w-screen h-20 flex items-center animate-[fade_3s]">
			<Logo title={props.title} />
		</header>
	);
};
