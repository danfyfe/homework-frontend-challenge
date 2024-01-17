import { CoreContent } from "@/app/useData";

interface H3 extends CoreContent { };

const H3 = ({ className, children }: H3) => (
	<h3 className={`${className ? className : ''}`}>
		{children}
	</h3>
);

export default H3;
