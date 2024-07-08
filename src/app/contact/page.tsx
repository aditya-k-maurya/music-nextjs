import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

function page() {
	return (
		<div className="min-h-screen bg-neutral-900 py-12 pt-36">
			<h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
				Contact Us
			</h1>
			<p className="mt-4 font-normal text-center md:text-[1rem] text-neutral-300 max-w-lg mx-auto ">
				We are here tohelp with any questions about our courses, programs, or
				events. Reach out and lett us know how we can assist you musical
				journey.
			</p>

			<form action="" className="mt-12 flex flex-col justify-center gap-8">
				<input
					className="bg-black text-neutral-400 mx-auto px-4 py-4 rounded text-[1rem] w-[600px] focus:border-none focus:outline-none z-10"
					type="text"
					name="email"
					placeholder="Your email address"
				/>
				<textarea
					className="bg-black text-neutral-400 mx-auto px-4 py-4 rounded text-[1rem] w-[600px] focus:border-none focus:outline-none h-48 z-10"
					name="message"
					placeholder="Your message"
					required
				/>
			</form>
			<BackgroundBeams/>
		</div>
	);
}

export default page;
