import NextLink, { LinkProps } from "next/link";

interface Link extends LinkProps {
	className?: string;
	children: string;
}

const Link = ({ children, href, className }: Link) => (
	<NextLink href={href} className={`${className ? className : ''}`}>
		{children}
	</NextLink>
);

export default Link;
