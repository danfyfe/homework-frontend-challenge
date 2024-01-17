import { CoreContent } from "@/app/useData";

interface PProps extends CoreContent { };


const P = ({ className, children }: PProps) => (
	<p className={`${className ? className : ''}`}>
		{children}
	</p>
);

export default P;
