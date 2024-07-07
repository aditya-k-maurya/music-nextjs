"use client"
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';

const musicSchoolContent = [
	{
		title: "Unleash Your Musical Potential: A Personal Journey to Mastery",
		description:
			"Embark on a transformative musical journey with us. Whether you're a beginner or an advanced musician, our personalized approach will help you discover and develop your unique sound.",
	},
	{
		title: "Interactive Live Feedback & Engagement",
		description:
			"Experience real-time feedback and interactive engagement with our expert instructors. Get personalized tips and guidance during live sessions to accelerate your learning process.",
	},
	{
		title: "Innovative Curriculum Tailored for You",
		description:
			"Stay ahead of the curve with our cutting-edge curriculum. Designed by industry professionals, our courses are constantly updated to include the latest trends and techniques in music.",
	},
	{
		title: "Endless Learning Opportunities",
		description:
			"Explore a world of musical possibilities with our extensive course offerings. From beginner to advanced levels, our diverse programs ensure that there's always something new to learn.",
	},
];


const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  )
}

export default WhyChooseUs