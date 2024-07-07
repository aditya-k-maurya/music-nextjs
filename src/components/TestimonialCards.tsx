"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
	{
		quote:
			"Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!",
		name: "Alex Johnson",
		title: "Guitar Student",
	},
	{
		quote:
			"The Advanced Vocal Techniques course has dramatically improved my singing abilities. The personalized feedback from the instructor was invaluable.",
		name: "Samantha Lee",
		title: "Vocal Student",
	},
	{
		quote:
			"Music Production Fundamentals gave me a solid foundation in sound engineering. I now feel confident in my ability to produce my own music.",
		name: "Michael Brown",
		title: "Music Production Student",
	},
	{
		quote:
			"The Electronic Music Production course opened up a whole new world of creativity for me. The hands-on approach made learning both fun and effective.",
		name: "Emily Davis",
		title: "Electronic Music Student",
	},
	{
		quote:
			"Blues Guitar Techniques has deepened my love for the blues and improved my guitar playing skills significantly. The instructor's passion for music is contagious!",
		name: "Chris Martinez",
		title: "Blues Guitar Student",
	},
];

function MusicSchoolTestimonials() {
	return (
		<div className="h-[40rem] 2-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
			<h2 className="text-3xl font-bold text-center mb-8 z-10">Hear Our Harmony: Voices of success</h2>
			<div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
				<div className="w-full max-w-6xl">
					<InfiniteMovingCards
						items={musicSchoolTestimonials}
						direction="right"
						speed="slow"
					/>
				</div>
			</div>
		</div>
	);
}

export default MusicSchoolTestimonials;
