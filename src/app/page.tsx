"use server";

import { Header, Hero } from "@/components";

export default async function LandingPage() {
	return (
		<>
			<Header title="/ Hi, I'm Ajesh Kharel." />
			<Hero />
		</>
	);
}
