import { CoreContent } from "@/app/useData";

interface P extends CoreContent { };


const P = ({ className, children }: P) => (
	<p className={`${className ? className : ''}`}>
		{children}
	</p>
);

export default P;
