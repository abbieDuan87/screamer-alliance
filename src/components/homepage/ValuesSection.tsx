"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface ValueCardProps {
	title: string;
	description: string;
	imageSrc: string;
	imageAlt: string;
}

function ValueCard({ title, description, imageSrc, imageAlt }: ValueCardProps) {
	return (
		<div className="group relative w-120 h-80 flex-shrink-0 [perspective:1000px]">
			<div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
				{/* Front of card */}
				<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-lg shadow-lg overflow-hidden">
					<div className="relative w-full h-full">
						<Image
							src={imageSrc}
							alt={imageAlt}
							fill
							className="object-cover"
						/>
						{/* Overlay for title */}
						<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
							<h3 className="text-white text-2xl font-bold font-h2 text-center uppercase px-4">
								{title}
							</h3>
						</div>
					</div>
				</div>

				{/* Back of card */}
				<div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-purple-950 rounded-lg shadow-lg p-6 flex flex-col justify-center">
					<h3 className="text-yellow-50 text-xl font-bold font-h2 text-center uppercase mb-4">
						{title}
					</h3>
					<p className="text-yellow-50 text-sm font-body text-center leading-relaxed">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}

export default function ValuesSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);

	const values = [
		{
			title: "Unity",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
			imageSrc:
				"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
			imageAlt: "Unity in football",
		},
		{
			title: "Excellence",
			description:
				"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
			imageSrc:
				"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
			imageAlt: "Excellence in sport",
		},
		{
			title: "Diversity",
			description:
				"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
			imageSrc:
				"https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
			imageAlt: "Diversity in team",
		},
		{
			title: "Growth",
			description:
				"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
			imageSrc:
				"https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=400&h=300&fit=crop",
			imageAlt: "Growth and development",
		},
	];

	const nextSlide = () => {
		setCurrentIndex((prev) => (prev + 1) % values.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
	};

	return (
		<section className="w-full py-20 flex flex-col items-center gap-12">
			<div className="w-full flex flex-col items-center gap-10">
				<div className="w-full flex items-center justify-center gap-8">
					{/* Left Image */}
					<div className="relative rotate-[-10deg] mr-2">
						<Image
							src="/images/homepage/grass2.PNG"
							alt="Football grass"
							width={60}
							height={60}
							className="object-cover rounded-lg"
						/>
					</div>

					{/* Title */}
					<div className="text-center text-purple-950 text-5xl font-bold uppercase font-sans">
						Our Values
					</div>

					{/* Right Image */}
					<div className="relative">
						<Image
							src="/images/homepage/whistle.PNG"
							alt="Football whistle"
							width={110}
							height={110}
							className="object-cover rounded-lg"
						/>
					</div>
				</div>

				<div className="relative w-full">
					{/* Left Navigation Button */}
					<button
						onClick={prevSlide}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-950 hover:bg-purple-800 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
						aria-label="Previous slide"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					{/* Right Navigation Button */}
					<button
						onClick={nextSlide}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-950 hover:bg-purple-800 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
						aria-label="Next slide"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					{/* Carousel Container */}
					<div className="overflow-hidden mx-24">
						<div
							ref={carouselRef}
							className="flex gap-8 transition-transform duration-500 ease-in-out"
							style={{
								transform: `translateX(-${currentIndex * (320 + 32)}px)`,
							}}
						>
							{values.map((value, index) => (
								<ValueCard
									key={index}
									title={value.title}
									description={value.description}
									imageSrc={value.imageSrc}
									imageAlt={value.imageAlt}
								/>
							))}
						</div>
					</div>

					{/* Dots Indicator */}
					<div className="flex justify-center gap-2 mt-6">
						{values.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-3 h-3 rounded-full transition-colors duration-200 ${
									index === currentIndex ? "bg-purple-950" : "bg-purple-300"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
