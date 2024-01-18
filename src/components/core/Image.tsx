import { useEffect, useState } from 'react';
import NextImage, { ImageProps as Props } from "next/image";

interface ImageProps extends Props {
	className?: string;
}

const Image = ({ alt, src, className, width, height }: ImageProps) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		setError(false);
	}, [src]);

	const handleError = () => {
		setError(true)
	}

	return (
		<NextImage
			src={error ? '/fallback-image.webp' : src}
			alt={alt}
			height={height}
			width={width}
			onError={handleError}
			className={`${className ? className : ''}`}
		/>
	)
};

export default Image;
