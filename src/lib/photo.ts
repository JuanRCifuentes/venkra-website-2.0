import { getImage } from 'astro:assets';

// Catalogue photos are full-size JPEGs on postimg. The build downloads each one
// and serves it from /_astro as WebP in a few widths, so phones get a fraction
// of the original and the pages no longer depend on postimg being up.
const WIDTHS = [320, 640, 960, 1280, 1600];

export const photo = (src: string) => getImage({ src, inferSize: true, widths: WIDTHS, format: 'webp' });
