'use client'
import {
    H2,
		H3,
		P,
		Image,
		Link,
		CTA
} from '@/components/core';
// import { ItemRow}

// ItemRowCard

const ItemRowCard = ({}) => {
	return (
		<article className="w-full md:w-1/4 flex md:flex-col">
				<Image
					width={56}
					height={56}
					className='object-contain w-14 h-14 mr-4 md:mr-0 mb-0 md:mb-2'
					alt="An icon of a baby"
					src="https://images.ctfassets.net/0sea1vycfyqy/L5oRoipFspehq5XctYo6j/de48df93398bbe00d4cd9a4d14d63772/Made_For_Learning_Icon.png"
				/>
			<div>
				<H3>Take out the guesswork</H3>
				<P>Spend less time researching and more time connecting with your child. Our experts link brain science and Montessori to the way you play.</P>
			</div>
		</article>
	)
};


const ItemRow = () => {
	return (
		<section className='bg-aqua w-full py-5 px-5 md:py-14 md:px-24'>
			<H2 className='mb-4 md:mb-8'>Make the most of playtime</H2>
			<div className='flex flex-wrap flex-col md:flex-row md:justify-evenly'>
				{
					[1,2,3,4,5,6].map((item) => {
						return (
							<ItemRowCard key={item}/>
						)
					})
				}
			</div>
			<div className='flex flex-col justify-center items-center'>
				<CTA text="Get Started" href="/" />
				<P className='text-center'>
					Free Shipping | Cancel Any Time
				</P>
			</div>
		</section>
    )
};

export default ItemRow;
