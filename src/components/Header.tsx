import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function Header() {
	return (
		<header className="w-full flex items-center justify-between py-4 px-6 border-b bg-background">
			<div className="flex items-center gap-3">
				<Link href="/" className="flex items-center gap-3">
					<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-lg font-bold">
						SA
					</div>
					<span className="font-logo text-xl tracking-wider">
						Screamer Alliance
					</span>
				</Link>
			</div>
			<nav className="flex-1 flex justify-center">
				<ul className="flex gap-6 items-center text-base font-medium">
					<li>
						<Link href="/" className="hover:underline font-nav">
							HOME
						</Link>
					</li>
					<li>
						<Link href="/our-story" className="hover:underline font-nav">
							OUR STORY
						</Link>
					</li>
					<li>
						<Link href="/teams" className="hover:underline font-nav">
							TEAMS
						</Link>
					</li>
					<li className="relative">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Link
									href="#"
									className="hover:underline font-nav flex items-center gap-1"
								>
									GALLERY
									<svg
										width="12"
										height="12"
										viewBox="0 0 20 20"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="inline-block"
									>
										<path
											d="M5 8L10 13L15 8"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</Link>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="bg-background">
								<DropdownMenuItem asChild>
									<Link href="/gallery/on-the-pitch" className="font-nav">
										On the Pitch
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/gallery/faces-of-screamer" className="font-nav">
										Faces of Screamer
									</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/gallery/gear-and-git" className="font-nav">
										Gear & Git
									</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</li>
					<li>
						<Link href="/contact" className="hover:underline font-nav">
							CONTACT
						</Link>
					</li>
				</ul>
			</nav>
			<div>
				<Button asChild>
					<Link href="/join" className="font-nav btn-custom">
						JOIN US
					</Link>
				</Button>
			</div>
		</header>
	);
}
