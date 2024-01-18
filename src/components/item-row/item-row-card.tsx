import {
	H3,
	P,
} from '@/components/core';
import ItemRowIcon from '@/components/item-row/item-row-icon';
import { ItemRowItem } from '@/interfaces';

const ItemRowCard = ({ img, heading, body }: ItemRowItem) => {
	return (
		<article className="w-full md:w-1/4 flex md:flex-col mb-5 md:mb-8">
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
	)
};

export default ItemRowCard;
