// Hardcoded from the old site's spreadsheet ("categories" and "products"
// sheets) until the catalogue reads its data from a real source.
export interface Category {
	id: string;
	name: string;
	description: string;
	image: string;
	/** Number of products in the category. */
	count: number;
	/** Lowest product price, in pesos. */
	fromPrice: number;
}

export const categories: readonly Category[] = [
	{
		id: 'camisetas',
		name: 'Over Smoke',
		description: 'Camisetas de algodón pima. Con exclusivos diseños minimalistas y diseños estampados.',
		image: 'https://i.postimg.cc/26WxT5r2/ACID-NNaranja-(1).jpg',
		count: 5,
		fromPrice: 75000,
	},
	{
		id: 'qtar_oversize',
		name: 'Over Qtar',
		description: 'Excelentes camisas oversized de algodón qtar.',
		image: 'https://i.postimg.cc/dVYHNp1F/OVERZ-Gris-(3).jpg',
		count: 5,
		fromPrice: 70000,
	},
	{
		id: 'gorras',
		name: 'Gorras',
		description: 'Gorras con diseño exclusivo, con hebilla metálica.',
		image: 'https://i.postimg.cc/NMq8zwNN/Roja1.jpg',
		count: 4,
		fromPrice: 35000,
	},
	{
		id: 'busos_y_hoodies',
		name: 'Polos',
		description: 'Busos y hoodies de algodón perchado.',
		image: 'https://i.postimg.cc/MH7k1hM0/busos-y-hoodies.jpg',
		count: 2,
		fromPrice: 130000,
	},
];
