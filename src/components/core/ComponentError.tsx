import { P, CTA, Modal} from "@/components/core";

const ComponentError = () => (
	<Modal>
		<P className="mb-5">An error has occurred</P>
		<CTA text="Return Home" href="/" />
	</Modal>
);

export default ComponentError;
