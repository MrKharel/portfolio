import Link from "next/link";
import type { ComponentType } from "react";

export interface NavButtonProps {
	label: string;
	href: string;
	icon?: ComponentType<{ className?: string }>;
}

export const NavButton = ({ label, href, icon: Icon }: NavButtonProps) => {
	return (
		<Link
			href={href}
			className="group flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white/70 transition-all duration-200 ease-out hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
			{Icon && <Icon className="size-4 transition-transform duration-200 group-hover:scale-110" />}
			<span>{label}</span>
		</Link>
	);
};
