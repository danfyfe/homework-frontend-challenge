import { CoreContent } from "@/hooks/useData";

interface PProps extends CoreContent { };


const P = ({ className, children }: PProps) => (
	<p className={`${className ? className : ''} text-charcoal`}>
		{children}
	</p>
);

export default P;
