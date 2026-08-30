import { type Metadata } from "next";
import { Fira_Code, Fira_Sans } from "next/font/google";

import "./globals.css";

const FiraCode = Fira_Code({ variable: "--font-fira-code", subsets: ["latin"] });
const FiraSans = Fira_Sans({ weight: ["300", "400", "500", "700"], variable: "--font-fira-sans", subsets: ["latin"] });

export const metadata: Metadata = { title: "Ajesh Kharel's Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${FiraCode.variable} ${FiraSans.variable}`}>
			<body className="font-sans flex flex-col bg-neutral-900 text-white/80">{children}</body>
		</html>
	);
}
