import { ItemRowType } from '@/interfaces';
import { H2 } from '@/components/core';
import ItemRowItems from '@/components/item-row/item-row-items';
import ItemRowCTA from '@/components/item-row/item-row-cta';

const ItemRowSection = ({ heading, items, button }: ItemRowType) => (
	<section className='bg-aqua w-full p-5 md:py-14 md:px-5'>
		<H2 className='mb-4 md:mb-8'>{heading}</H2>
		<ItemRowItems items={items} />
		<ItemRowCTA   button={button} />
	</section>
);

export default ItemRowSection;
