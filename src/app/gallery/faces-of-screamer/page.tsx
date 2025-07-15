import GalleryLayout from "@/components/GalleryLayout";

export default function FacesOfScreamer() {
	return (
		<GalleryLayout
			title="Faces of Screamer"
			imagesWithAspect={[
				{
					url: "https://res.cloudinary.com/dqe7l2fwl/image/upload/v1752236582/DSCF0176-2_wxteyc.jpg",
					aspect: "2:3",
				},
				{
					url: "https://res.cloudinary.com/dqe7l2fwl/image/upload/v1752238760/DSCF0391_wsrvio.jpg",
					aspect: "2:3",
				},
				{
					url: "https://res.cloudinary.com/dqe7l2fwl/image/upload/v1752238802/DSCF8199_faorq5.jpg",
					aspect: "2:3",
				},
				{
					url: "https://res.cloudinary.com/dqe7l2fwl/image/upload/v1752238907/DSCF5188_aejvua.jpg",
					aspect: "3:2",
				},
				{
					url: "https://res.cloudinary.com/dqe7l2fwl/image/upload/v1752239315/DSCF3591_n2azht.jpg",
					aspect: "3:2",
				},
			]}
		/>
	);
}
