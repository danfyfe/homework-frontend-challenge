'use client'
import { ItemRowType } from '@/interfaces';
import {
	H2,
	Loading,
	ComponentError
} from '@/components/core';
import { useData } from '@/hooks/useData';
import ItemRowSection from './item-row-section';


const ItemRow = () => {
	const { data, isLoading, error, } = useData();
	if (isLoading) return (<Loading />);
	if (error) return (<ComponentError />);
	const itemRowData: ItemRowType | undefined = data?.itemRow;

	return itemRowData ? (
		<ItemRowSection
			heading={itemRowData.heading}
			items={itemRowData.items}
			button={itemRowData.button} />
	) : null
};

export default ItemRow;
