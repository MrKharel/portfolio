"use client";

import Link from "next/link";
import type { ComponentType } from "react";

export interface NavButtonProps {
	label: string;
	href: string;
	handleClick?: () => void;
	icon?: ComponentType<{ className?: string }>;
	isActive?: boolean;
	className?: string;
}

export const NavButton = (props: NavButtonProps) => {
	return (
		<Link
			onClick={() => props.handleClick}
			href={props.href}
			className={`group flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white/70 transition-all duration-200 ease-out hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${
				props.className !== undefined
					? props.className
							.split(" ")
							.map((c) => `!${c}`)
							.join(" ")
					: ""
			}`}>
			{props.icon && <props.icon className="size-4 transition-transform duration-200 group-hover:scale-110" />}
			<span>{props.label}</span>
		</Link>
	);
};
