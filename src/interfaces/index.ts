export interface Image {
	src: string;
	alt?: string;
	caption?: string;
}
  
export interface Button {
	text?: string;
	href: string;
	className?: string;
}

export interface CoreContent {
	className?: string;
	children: React.ReactNode;
}

export interface MediaBanner {
	img?: Image;
	leadingText?: string;
	heading?: string;
	orientation?: "left" | "right";
	button?: Button;
}

export interface ItemRowType {
	heading?: string;
	items?: {
		img?: Image;
		heading?: string;
		body?: string;
	}[];
	button?: Button;
}

export interface ItemRowItem {
	img?: Image | undefined;
	heading?: string;
	body?: string;
}
