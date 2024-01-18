import {
	P,
	CTA
} from "@/components/core";
import { Button } from "@/interfaces";

const ItemRowCTA = ({ text, href }: Button) => (
	<div className='flex flex-col justify-center items-center mt-5 sm:mt-10'>
		<CTA text={text} href={href} />
		<P className='text-center my-4 md:mb-0'>
			Free Shipping | Cancel Any Time
		</P>
	</div>
);

export default ItemRowCTA;
