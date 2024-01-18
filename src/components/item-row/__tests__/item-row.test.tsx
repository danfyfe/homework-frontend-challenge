import { describe, expect, it } from '@jest/globals';
import { render, cleanup } from '@testing-library/react';
import ItemRowSection from "@/components/item-row/item-row-section";

const MOCK_DATA = {
	heading:
		"The right playthings, activities, and guidance delivered at the right time",
	items: [
		{
			heading: "Take out the guess work",
			body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
			img: {
				src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
				alt: "An icon of a baby",
			},
		},
		{
			heading: "Take out the guess work",
			body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
			img: {
				src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
				alt: "An icon of a baby",
			},
		},
		{
			heading: "Take out the guess work",
			body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
			img: {
				src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
				alt: "An icon of a baby",
			},
		},
		{
			heading: "Take out the guess work",
			body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
			img: {
				src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
				alt: "An icon of a baby",
			},
		},
		{
			heading: "Take out the guess work",
			body: "Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.",
			img: {
				src: "https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png",
				alt: "An icon of a baby",
			},
		},
	],
	button: {
		text: "Explore the Play Kits",
		href: "https://lovevery.com/products/the-play-kits/",
	},
};

describe('ItemRowSection', () => {
	beforeEach(cleanup);

  it('Renders a heading', () => {
		const container = render(
			<ItemRowSection 
				heading={MOCK_DATA.heading}
				button={MOCK_DATA.button}
				items={MOCK_DATA.items}
			/>
		);
		const heading = container.getByText("The right playthings, activities, and guidance delivered at the right time");
		expect(heading).toBeDefined();
		expect(heading.tagName).toBe('H2');
	});

	it('Renders a the correct amount of items', () => {
		const container = render(
			<ItemRowSection 
				heading={MOCK_DATA.heading}
				button={MOCK_DATA.button}
				items={MOCK_DATA.items}
			/>
		);
		const items = container.baseElement.querySelectorAll('article');
		expect(items.length).toBe(MOCK_DATA.items.length);
	});

	it('Renders the correct content in an item', () => {
		const container = render(
			<ItemRowSection 
				heading={MOCK_DATA.heading}
				button={MOCK_DATA.button}
				items={MOCK_DATA.items}
			/>
		);
		const firstItem = container.baseElement.querySelector('article');
		const itemHeading = firstItem?.querySelector('h3');
		const itemCopy = firstItem?.querySelector('p');
		expect(itemHeading?.innerHTML).toBe(MOCK_DATA.items[0].heading);
		expect(itemCopy?.innerHTML).toBe(MOCK_DATA.items[0].body);
	});

	it('Renders the CTA', () => {
		const container = render(
			<ItemRowSection 
				heading={MOCK_DATA.heading}
				button={MOCK_DATA.button}
				items={MOCK_DATA.items}
			/>
		);
		const CTA = container.getByText("Explore the Play Kits");
		const DisclaimerText = container.getByText("Free Shipping | Cancel Any Time");
		expect(CTA).toBeDefined();
		expect(DisclaimerText).toBeDefined();
	});
});
