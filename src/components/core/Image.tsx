import NextImage, { ImageProps as Props } from "next/image";

interface ImageProps extends Props {
	className?: string;
}

const Image = ({ alt, src, className, width, height }: ImageProps) => (
	<NextImage
		src={src}
		alt={alt}
		height={height}
		width={width}
		className={`${className ? className : ''}`}
	/>
);

export default Image;
