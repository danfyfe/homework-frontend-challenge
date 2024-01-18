import {
	H3,
	P,
} from '@/components/core';
import ItemRowIcon from '@/components/item-row/item-row-icon';

const ItemRowCard = ({ item }) => {
	console.log(item)
	return (
		<article className="w-full md:w-1/4 flex md:flex-col mb-5 md:mb-8">
			<ItemRowIcon image={item.img} />
			<div>
				<H3>{item.heading}</H3>
				<P>{item.body}</P>
			</div>
		</article>
	)
};

export default ItemRowCard;
