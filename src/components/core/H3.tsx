import { CoreContent } from "@/hooks/useData";

interface H3Props extends CoreContent { };

const H3 = ({ className, children }: H3Props) => (
	<h3 className={`${className ? className : ''} text-charcoal font-bold`}>
		{children}
	</h3>
);

export default H3;
