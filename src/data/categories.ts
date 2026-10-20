import { products } from './products';

// Hardcoded from the old site's spreadsheet ("categories" sheet) until the
// catalogue reads its data from a real source.
export interface Category {
	/** URL slug. */
	id: string;
	name: string;
	description: string;
	image: string;
	/** Number of products in the category. */
	count: number;
	/** Lowest product price, in pesos. */
	fromPrice: number;
}

const base = [
	{
		id: 'over-smoke',
		name: 'Over Smoke',
		description: 'Camisetas de algodón pima. Con exclusivos diseños minimalistas y diseños estampados.',
		image: 'https://i.postimg.cc/26WxT5r2/ACID-NNaranja-(1).jpg',
	},
	{
		id: 'over-qtar',
		name: 'Over Qtar',
		description: 'Excelentes camisas oversized de algodón qtar.',
		image: 'https://i.postimg.cc/dVYHNp1F/OVERZ-Gris-(3).jpg',
	},
	{
		id: 'gorras',
		name: 'Gorras',
		description: 'Gorras con diseño exclusivo, con hebilla metálica.',
		image: 'https://i.postimg.cc/NMq8zwNN/Roja1.jpg',
	},
	{
		id: 'polos',
		name: 'Polos',
		description: 'Busos y hoodies de algodón perchado.',
		image: 'https://i.postimg.cc/MH7k1hM0/busos-y-hoodies.jpg',
	},
];

export const categories: readonly Category[] = base.map((category) => {
	const prices = products.filter((product) => product.category === category.id).map((product) => product.price);
	return { ...category, count: prices.length, fromPrice: Math.min(...prices) };
});
