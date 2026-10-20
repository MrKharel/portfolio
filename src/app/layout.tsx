import { type Metadata } from "next";
import { Fira_Code, Fira_Sans, Roboto } from "next/font/google";

import "./globals.css";

const FiraCode = Fira_Code({ variable: "--font-mono", subsets: ["latin"] });
const FiraSans = Fira_Sans({
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});
const Roboto_Font = Roboto({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: "Ajesh Kharel's Portfolio" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${FiraCode.variable} ${FiraSans.variable} ${Roboto_Font.variable} max-w-screen`}
    >
      <body className="flex flex-col items-center">{children}</body>
    </html>
  );
}
