import { Image } from "@/components/core";
import { Image as ImageType } from "@/interfaces";

const ItemRowIcon = ({ alt, src }: ImageType) => {
	return (
		<Image
			width={56}
			height={56}
			className='object-contain w-14 h-14 sm:w-20 sm:h-20 mr-4 md:mr-0 mb-0 md:mb-2'
			alt={alt ?? ''}
			src={src}
		/>
	)
}

export default ItemRowIcon;
