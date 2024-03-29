import ItemRowCard from "@/components/item-row/item-row-card";
import { ItemRowType } from "@/interfaces";

const ItemRowItems = ({ items }: ItemRowType) => (
	<div className='flex flex-wrap flex-col md:flex-row md:justify-around gap-y-2 md:gap-4 xl:gap-x-2 xl:gap-y-4'>
		{
			items?.map((item, index: number) => {
				return (
					<ItemRowCard
						key={`item-row-item-${index}`}
						img={item.img}
						heading={item.heading}
						body={item.body}
					/>
				)
			})
		}
	</div>
);

export default ItemRowItems;
