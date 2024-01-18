import { CoreContent } from "@/interfaces";

interface H3Props extends CoreContent { };

const H3 = ({ className, children }: H3Props) => (
	<h3 className={`${className ? className : ''} text-charcoal font-copy text-h3 font-bold`}>
		{children}
	</h3>
);

export default H3;
