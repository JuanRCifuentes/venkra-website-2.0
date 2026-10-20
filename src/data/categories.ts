// Hardcoded from the "categories" and "products" sheets of the old site's
// spreadsheet until the catalogue reads it directly.
export interface Category {
	id: string;
	name: string;
	description: string;
	image: string;
	count: number;
	fromPrice: string;
}

export const categories: Category[] = [
	{
		id: 'camisetas',
		name: 'Over Smoke',
		description: 'Camisetas de algodón pima. Con exclusivos diseños minimalistas y diseños estampados.',
		image: 'https://i.postimg.cc/26WxT5r2/ACID-NNaranja-(1).jpg',
		count: 5,
		fromPrice: '$75.000',
	},
	{
		id: 'qtar_oversize',
		name: 'Over Qtar',
		description: 'Excelentes camisas oversized de algodón qtar.',
		image: 'https://i.postimg.cc/dVYHNp1F/OVERZ-Gris-(3).jpg',
		count: 5,
		fromPrice: '$70.000',
	},
	{
		id: 'gorras',
		name: 'Gorras',
		description: 'Gorras con diseño exclusivo, con hebilla metálica.',
		image: 'https://i.postimg.cc/NMq8zwNN/Roja1.jpg',
		count: 4,
		fromPrice: '$35.000',
	},
	{
		id: 'busos_y_hoodies',
		name: 'Polos',
		description: 'Busos y hoodies de algodón perchado.',
		image: 'https://i.postimg.cc/MH7k1hM0/busos-y-hoodies.jpg',
		count: 2,
		fromPrice: '$130.000',
	},
];

export interface Product {
	id: string;
	name: string;
	category: string;
	price: string;
	image: string;
}

// From the "products" sheet.
export const products: Product[] = [
	{ id: 'c_acid_nnegro', name: 'Black Smoke', category: 'camisetas', price: '$75.000', image: 'https://i.postimg.cc/rpB1dLx4/ACID-NNegro-(8).jpg' },
	{ id: 'c_acid_cafe', name: 'Brown Smoke', category: 'camisetas', price: '$75.000', image: 'https://i.postimg.cc/4N6SsWC1/ACID-Cafe-(7).jpg' },
	{ id: 'c_acid_gris', name: 'White Smoke', category: 'camisetas', price: '$75.000', image: 'https://i.postimg.cc/vHt3pD9K/ACID-Gris-Negro-(5).jpg' },
	{ id: 'c_acid_namarillo', name: 'Yellow Smoke', category: 'camisetas', price: '$75.000', image: 'https://i.postimg.cc/vmchgzjy/ACID-NAmarillo-(4).jpg' },
	{ id: 'c_acid_nnaranja', name: 'Orange Smoke', category: 'camisetas', price: '$75.000', image: 'https://i.postimg.cc/1tFKMzsH/ACID-NNaranja-(5).jpg' },
	{ id: 'c_over_gris', name: 'Grey Qtar', category: 'qtar_oversize', price: '$70.000', image: 'https://i.postimg.cc/dVYHNp1F/OVERZ-Gris-(3).jpg' },
	{ id: 'c_over_cafe', name: 'Brown Qtar', category: 'qtar_oversize', price: '$70.000', image: 'https://i.postimg.cc/dQhxhGXf/OVERZ%20Caf%C3%A9%20(2).jpg' },
	{ id: 'c_over_namarillo', name: 'Black & Yellow Qtar', category: 'qtar_oversize', price: '$70.000', image: 'https://i.postimg.cc/hvpMQ5SF/OVER-NAmarillo-(2).jpg' },
	{ id: 'c_over_nnaranja', name: 'Black & Orange Qtar', category: 'qtar_oversize', price: '$70.000', image: 'https://i.postimg.cc/4NtVM37J/OVER-NNaranja-(8).jpg' },
	{ id: 'c_over_negra_namarillo', name: 'Yellow Shadow', category: 'qtar_oversize', price: '$70.000', image: 'https://i.postimg.cc/vBH4ZYZp/OVER-Negra-Amarillo-(11).jpg' },
	{ id: 'g_negra', name: 'Trucker Carbon', category: 'gorras', price: '$35.000', image: 'https://i.postimg.cc/d1PRxKWx/Negra1.jpg' },
	{ id: 'g_plata', name: 'Trucker Black and Silver', category: 'gorras', price: '$35.000', image: 'https://i.postimg.cc/tTQdMHrS/Plata1.jpg' },
	{ id: 'g_roja', name: 'Trucker Red Fire', category: 'gorras', price: '$35.000', image: 'https://i.postimg.cc/NMq8zwNN/Roja1.jpg' },
	{ id: 'g_snake', name: 'Trucker Snake', category: 'gorras', price: '$35.000', image: 'https://i.postimg.cc/rmXGPLhY/Snake1.jpg' },
	{ id: 'b_busos', name: 'Buso Venkra', category: 'busos_y_hoodies', price: '$130.000', image: 'https://i.postimg.cc/52pTV29c/b-venkra-negro-p.jpg' },
	{ id: 'b_hoodies', name: 'Hoodie VNK', category: 'busos_y_hoodies', price: '$150.000', image: 'https://i.postimg.cc/3wXm2NSk/b-hoodie-gris-p.jpg' },
];
