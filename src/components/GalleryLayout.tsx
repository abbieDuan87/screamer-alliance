import Image from "next/image";

export default function GalleryLayout({ title }: { title: string }) {
	return (
		<section className="py-10">
			<h1 className="font-h1 text-3xl mb-8 text-center">{title}</h1>
			{/* 3:2 images, 2 per row */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div className="aspect-[3/2] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/600x400"
						alt="Placeholder 3:2"
						width={600}
						height={400}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="aspect-[3/2] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/600x400"
						alt="Placeholder 3:2"
						width={600}
						height={400}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			{/* 2:3 images, 3 per row */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
				<div className="aspect-[2/3] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/400x600"
						alt="Placeholder 2:3"
						width={400}
						height={600}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="aspect-[2/3] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/400x600"
						alt="Placeholder 2:3"
						width={400}
						height={600}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="aspect-[2/3] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/400x600"
						alt="Placeholder 2:3"
						width={400}
						height={600}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			{/* 3:2 images, 2 per row */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="aspect-[3/2] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/600x400"
						alt="Placeholder 3:2"
						width={600}
						height={400}
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="aspect-[3/2] bg-gray-200 rounded overflow-hidden flex items-center justify-center">
					<Image
						src="https://placehold.co/600x400"
						alt="Placeholder 3:2"
						width={600}
						height={400}
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
		</section>
	);
}
