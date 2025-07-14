import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lora, Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Screamer Alliance",
	description:
		"Official website for Screamer Alliance: community, teams, and stories.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				<div className="px-4 sm:px-8 lg:px-32 mx-auto max-w-screen-2xl">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
