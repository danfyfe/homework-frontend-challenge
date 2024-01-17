import { Button } from "@/app/useData";
import Link from "@/components/core/Link";

const CTA = ({ text, href, className }: Button) => (
	<Link href={href} className={`${className ? className : ''}`}>
		{text}
	</Link>
);

export default CTA;
