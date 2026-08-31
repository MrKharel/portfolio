"use server";

import { Header, Hero, Projects, Techs } from "@/components";

export default async function LandingPage() {
	return (
		<>
			<Header title="/ajesh kharel" />
			<Hero />
			<Techs />
			<Projects />
		</>
	);
}
