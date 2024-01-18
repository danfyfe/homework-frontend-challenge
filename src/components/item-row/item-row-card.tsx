import { H3, P } from '@/components/core';
import ItemRowIcon from '@/components/item-row/item-row-icon';
import { ItemRowItem } from '@/interfaces';

const ItemRowCard = ({ img, heading, body }: ItemRowItem) => (
	<article className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] flex md:flex-col ">
		{
			img ? (
				<ItemRowIcon alt={img.alt} src={img.src} />
			) : null
		}
		<div>
			<H3>{heading}</H3>
			<P>{body}</P>
		</div>
	</article>
);

export default ItemRowCard;
