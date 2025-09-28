import Image from "next/image";
import FadeImageSection from "@/components/homepage/FadeImageSection";
import ValuesSection from "@/components/homepage/ValuesSection";

export default function HomePage() {
	return (
		<>
			{/* --- Hero Section --- */}
			<section className="relative w-full min-h-[730px] bg-yellow-50 flex flex-col items-center justify-center overflow-hidden">
				{/* Top Left - Hug */}
				<Image
					src="/images/homepage/hug.png"
					alt="Two players hugging"
					width={300}
					height={300}
					className="absolute left-7 top-13"
					priority
				/>
				{/* Top Right - Goal */}
				<Image
					src="/images/homepage/gate.png"
					alt="Football gate"
					width={280}
					height={280}
					className="absolute right-8 top-26"
				/>
				{/* Bottom Left - Boots */}
				<Image
					src="/images/homepage/shoes.png"
					alt="Football boots"
					width={160}
					height={160}
					className="absolute origin-top-left rotate-[-10deg] left-2 bottom-0"
				/>
				{/* Bottom Right - Tactics */}
				<Image
					src="/images/homepage/board.png"
					alt="Tactics board"
					width={130}
					height={130}
					className="absolute rotate-[20deg] right-5 bottom-12"
				/>
				{/* Center Bottom - Hands */}
				<Image
					src="/images/homepage/hands.png"
					alt="Team hands"
					width={250}
					height={250}
					className="absolute left-1/2 bottom-12 -translate-x-1/2"
				/>

				{/* Central Text as Image */}
				<div className="relative flex flex-row items-center mt-30 mb-20">
					<Image
						src="/images/homepage/text.png"
						alt="Screamer Alliance logo text"
						width={800}
						height={800}
						priority
					/>
				</div>
			</section>

			{/* --- About Us Section --- */}
			<section className="w-full max-w-[1440px] mx-auto p-20 bg-yellow-50 flex flex-col items-center gap-12">
				<div className="w-full flex flex-col items-center gap-12">
					<div className="w-full flex flex-col items-center gap-2">
						<div className="w-full text-center"></div>
						<div className="w-full text-center text-purple-950 text-5xl font-bold uppercase leading-[48px] font-h1">
							ABOUT US
						</div>
					</div>
					<div className="w-full text-center">
						<span className="text-purple-950 text-3xl font-bold leading-9 font-h2 whitespace-nowrap">
							Screamer Alliance is an Asian women’s football club based in
							London.
							<br />
						</span>
						<span className="text-purple-950 text-2xl font-normal leading-loose font-body">
							<br />
							What began as a casual kickabout from a post on social media in
							summer 2023 has grown into a thriving community. After our first
							session on 1st October 2023 with 16 players, we officially founded
							Screamer Alliance WFC in March 2024.
							<br />
							<br />
							Today, we host three weekly sessions and run two teams—a
							development team and a recreational team—bringing together over 60
							registered members united by a love for the game and the joy we
							share on the pitch.
						</span>
					</div>
				</div>
			</section>

			<ValuesSection />

			<FadeImageSection />
		</>
	);
}
