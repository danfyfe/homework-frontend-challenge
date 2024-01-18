import { CoreContent } from "@/interfaces";

interface ModalProps extends CoreContent { };

const Modal = ({ children }: ModalProps) => (
	<div className="w-full p-5 md:py-14 md:px-24 flex flex-col justify-center items-center absolute top-1/2 -translate-y-1/2">
		{children}
	</div>
);

export default Modal;
