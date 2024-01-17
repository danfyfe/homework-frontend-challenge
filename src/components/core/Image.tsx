import NextImage, { ImageProps } from "next/image";

interface Image extends ImageProps {
	className?: string;
}

const Image = ({ alt, src, className, width, height }: Image) => (
	<NextImage
		src={src}
		alt={alt}
		height={height}
		width={width}
		className={`${className ? className : ''}`}
	/>
);

export default Image;
