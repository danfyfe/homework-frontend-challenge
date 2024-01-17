import { Button } from "@/app/useData";
import Link from "@/components/core/Link";

const CTA = ({ text, href, className }: Button) => (
	<Link
		href={href}
		className={`
			${className ? className : ''}
			min-h-[3rem] h-16 px-9 rounded-sm
			text-white text-lg font-bold
			bg-cta-blue hover:bg-cta-blue-hover
			transition-color duration-250 ease-in-out
			flex items-center text-center
		`}>
		{text}
	</Link>
);

export default CTA;
