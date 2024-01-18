import { Image } from "@/components/core";

const ItemRowIcon = ({ image }) => (
	<Image
		width={56}
		height={56}
		className='object-contain w-14 h-14 mr-4 md:mr-0 mb-0 md:mb-2'
		alt={image.alt}
		src={image.src}
	/>
);

export default ItemRowIcon;
