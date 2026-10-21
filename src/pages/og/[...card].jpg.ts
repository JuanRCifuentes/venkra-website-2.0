import type { APIRoute, GetStaticPaths } from 'astro';
import { categories } from '../../data/categories';
import { products } from '../../data/products';
import { formatPrice } from '../../lib/format';
import { categoryCard, homeCard, productCard } from '../../lib/og';

// One link preview card per page that has its own: the site, each line and each product.
export const getStaticPaths = (() => [
	{ params: { card: 'home' }, props: { draw: homeCard } },
	...categories.map((category) => ({
		params: { card: `catalogo/${category.id}` },
		props: {
			draw: () =>
				categoryCard({
					eyebrow: `${category.products.length} prendas`,
					name: category.name,
					price: `Desde ${formatPrice(category.fromPrice)}`,
					photo: category.image,
				}),
		},
	})),
	...products.map((product) => ({
		params: { card: `catalogo/${product.category}/${product.id}` },
		props: {
			draw: () =>
				productCard({
					eyebrow: categories.find((category) => category.id === product.category)!.name,
					name: product.name,
					price: formatPrice(product.price),
					photo: product.images[0],
				}),
		},
	})),
]) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) =>
	new Response(await props.draw(), { headers: { 'Content-Type': 'image/jpeg' } });
