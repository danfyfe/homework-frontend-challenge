import { CoreContent } from "@/interfaces";

interface PProps extends CoreContent { };


const P = ({ className, children }: PProps) => (
	<p className={`${className ? className : ''} text-charcoal text-p font-copy font-normal`}>
		{children}
	</p>
);

export default P;
