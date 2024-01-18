import NextLink, { LinkProps as Props } from "next/link";
import { ReactNode } from "react";

interface LinkProps extends Props {
	className?: string;
	children: ReactNode;
}

const Link = ({ children, href, className }: LinkProps) => (
	<NextLink href={href} className={`${className ? className : ''}`}>
		{children}
	</NextLink>
);

export default Link;
