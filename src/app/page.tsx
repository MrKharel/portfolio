"use server";

import { Header, Hero, Techs } from "@/components";

export default async function LandingPage() {
	return (
		<>
			<Header />
			<Hero />
			<Techs />
		</>
	);
}
