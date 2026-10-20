// Hardcoded from the old site's spreadsheet ("products" sheet), one standout
// piece per category, until the catalogue reads its data from a real source.
export interface Product {
	name: string;
	category: string;
	/** Price in pesos. */
	price: number;
	image: string;
}

export const featured: readonly Product[] = [
	{
		name: 'Black Smoke',
		category: 'Over Smoke',
		price: 75000,
		image: 'https://i.postimg.cc/rpB1dLx4/ACID-NNegro-(8).jpg',
	},
	{
		name: 'Yellow Shadow',
		category: 'Over Qtar',
		price: 70000,
		image: 'https://i.postimg.cc/vBH4ZYZp/OVER-Negra-Amarillo-(11).jpg',
	},
	{
		name: 'Trucker Snake',
		category: 'Gorras',
		price: 35000,
		image: 'https://i.postimg.cc/rmXGPLhY/Snake1.jpg',
	},
	{
		name: 'Hoodie VNK',
		category: 'Polos',
		price: 150000,
		image: 'https://i.postimg.cc/3wXm2NSk/b-hoodie-gris-p.jpg',
	},
];
