import { type Metadata } from "next";
import { Geist, Josefin_Sans, Nunito } from "next/font/google";

const GeistFont = Geist({ variable: "--font-geist", subsets: ["latin"] });
const JosefinFont = Josefin_Sans({ variable: "--font-josefin", subsets: ["latin"] });
const NunitoFont = Nunito({ variable: "--font-nunito", subsets: ["latin"] });

export const metadata: Metadata = { title: "Ajesh Kharel's Portfolio" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${GeistFont.variable} ${JosefinFont.variable} ${NunitoFont.variable}`}>
			<body className="">{children}</body>
		</html>
	);
}
