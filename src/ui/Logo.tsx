"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoProps {
	title?: string;
}

export const Logo = (props: LogoProps) => {
	return (
		<Link
			href="#"
			className="group flex items-center gap-0.5 w-fit px-2.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-white/80 hover:text-white cursor-pointer select-none transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 active:scale-99">
			<span className="inline-block transition-transform duration-300 ease-out group-hover:-rotate-12">{"<"}</span>
			<span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
				{props.title ? props.title : usePathname()}
			</span>
		</Link>
	);
};
