import { CoreContent } from "@/app/useData";

interface H2Props extends CoreContent { };

const H2 = ({ className, children }: H2Props) => (
	<h2 className={`${className ? className : ''} text-charcoal text-4xl font-bold`}>
		{children}
	</h2>
);

export default H2;
