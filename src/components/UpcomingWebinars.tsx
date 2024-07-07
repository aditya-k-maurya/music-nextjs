"use client"
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
	const featuredWebinars = [
		{
			title: "Understanding Music Theory",
			description:
				"Dive deep into the fundamentals of music theory and enhance your musical skills.",
			slug: "understanding-music-theory",
			isFeatured: true,
		},
		{
			title: "The Art of Songwriting",
			description:
				"Learn the secrets of writing compelling songs and unleash your creativity.",
			slug: "the-art-of-songwriting",
			isFeatured: true,
		},
		{
			title: "Mastering Guitar Techniques",
			description:
				"Advanced techniques to take your guitar playing to the next level.",
			slug: "mastering-guitar-techniques",
			isFeatured: true,
		},
		{
			title: "Vocal Warm-Ups and Exercises",
			description:
				"Effective warm-up routines and exercises to improve your vocal performance.",
			slug: "vocal-warm-ups-and-exercises",
			isFeatured: true,
		},
		{
			title: "Introduction to Music Production",
			description:
				"A beginner's guide to music production and sound engineering.",
			slug: "introduction-to-music-production",
			isFeatured: true,
		},
		{
			title: "Electronic Music Production Tips",
			description:
				"Tips and tricks for producing high-quality electronic music.",
			slug: "electronic-music-production-tips",
			isFeatured: true,
		},
	];

	return (
		<div className="p-12 bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="text-center">
					<h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
						FEATURED WEBINARS
					</h2>
					<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
						Enhance Your Musical Journey
					</p>
				</div>
        <div className="mt-10">
          <HoverEffect items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link:`/webinar/${webinar.slug}`
            }
          ))} />
        </div>
				<div className="mt-10 text-center">
					<Link
						href={"/"}
						className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
						View All webinars
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UpcomingWebinars;
