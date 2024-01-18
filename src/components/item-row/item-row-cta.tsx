import {
	P,
	CTA
} from "@/components/core";

const ItemRowCTA = ({ button }) => (
	<div className='flex flex-col justify-center items-center mt-5 sm:mt-10'>
		<CTA text={button.text} href={button.href} />
		<P className='text-center mt-2'>
			Free Shipping | Cancel Any Time
		</P>
	</div>
);

export default ItemRowCTA;
