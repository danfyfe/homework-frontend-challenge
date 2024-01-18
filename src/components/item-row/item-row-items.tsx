import ItemRowCard from "@/components/item-row/item-row-card";

const ItemRowItems = ({ items }) => (
	<div className='flex flex-wrap flex-col md:flex-row md:justify-evenly'>
		{
			items.map((item, index: number) => {
				return (
					<ItemRowCard key={`item-row-item-${index}`} item={item} />
				)
			})
		}
	</div>
);

export default ItemRowItems;
