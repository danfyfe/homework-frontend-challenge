import NextLink, { LinkProps as Props } from "next/link";

interface LinkProps extends Props {
	className?: string;
	children: string;
}

const Link = ({ children, href, className }: LinkProps) => (
	<NextLink href={href} className={`${className ? className : ''}`}>
		{children}
	</NextLink>
);

export default Link;
