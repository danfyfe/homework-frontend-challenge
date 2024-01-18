'use client'
import { ItemRowType } from '@/interfaces';
import {
	H2,
	Loading,
	ComponentError
} from '@/components/core';
import ItemRowItems from '@/components/item-row/item-row-items';
import ItemRowCTA from '@/components/item-row/item-row-cta';
import { useData } from '@/hooks/useData';


const ItemRow = () => {
	const { data, isLoading, error, } = useData();
	if (isLoading) return (<Loading />);
	if (error) return (<ComponentError />);
	const itemRowData: ItemRowType | undefined = data?.itemRow;

	return itemRowData ? (
		<section className='bg-aqua w-full p-5 md:py-14 md:px-24'>
			<H2 className='mb-4 md:mb-8'>{itemRowData.heading}</H2>
			<ItemRowItems items={itemRowData.items} />
			<ItemRowCTA   button={itemRowData.button} />
		</section>
	) : null
};

export default ItemRow;
