import { CoreContent } from "@/interfaces";

interface H2Props extends CoreContent { };

const H2 = ({ className, children }: H2Props) => (
	<h2 className={`${className ? className : ''} text-charcoal text-h2-mob md:text-h2-desk font-bold text-center`}>
		{children}
	</h2>
);

export default H2;
