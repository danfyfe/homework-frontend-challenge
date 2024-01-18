import { Button } from "@/interfaces";
import Link from "@/components/core/Link";

const CTA = ({ text, href, className }: Button) => (
	<Link
		href={href}
		className={`
			min-h-[3rem] sm:h-16 w-full md:w-1/4
			px-9 rounded-sm
			text-white text-lg font-bold
			bg-cta-blue hover:bg-cta-blue-hover
			transition-color duration-250 ease-in-out
			flex items-center justify-center text-center
			${className ? className : ''}
		`}>
		{text}
	</Link>
);

export default CTA;
