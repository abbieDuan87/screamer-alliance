import Image from "next/image";

interface GalleryImage {
	url: string;
	aspect: "2:3" | "3:2";
}

export default function GalleryLayout({
	title,
	images,
	imagesWithAspect,
}: {
	title: string;
	images?: string[];
	imagesWithAspect?: GalleryImage[];
}) {
	// If imagesWithAspect is provided, use it; otherwise, fallback to images as 2:3
	const images23 = imagesWithAspect
		? imagesWithAspect.filter((img) => img.aspect === "2:3")
		: images?.map((url) => ({ url, aspect: "2:3" as const })) || [];
	const images32 = imagesWithAspect
		? imagesWithAspect.filter((img) => img.aspect === "3:2")
		: [];

	return (
		<section className="py-10">
			<h1 className="font-h1 text-3xl mb-8 text-center">{title}</h1>
			{/* 2:3 images, 3 per row */}
			{images23.length > 0 && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
					{images23.map((img, idx) => (
						<div
							key={img.url + idx}
							className="aspect-[2/3] bg-gray-200 rounded overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
						>
							<Image
								src={img.url}
								alt={`Gallery image 2:3 ${idx + 1}`}
								width={400}
								height={600}
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
			)}
			{/* 3:2 images, 2 per row */}
			{images32.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
					{images32.map((img, idx) => (
						<div
							key={img.url + idx}
							className="aspect-[3/2] bg-gray-200 rounded overflow-hidden flex items-center justify-center transition-transform duration-300 hover:scale-105"
						>
							<Image
								src={img.url}
								alt={`Gallery image 3:2 ${idx + 1}`}
								width={600}
								height={400}
								className="object-cover w-full h-full"
							/>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
