// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Absolute URLs for the link preview tags, without the trailing slash the host drops.
	site: 'https://venkra.maxfika.com',
	trailingSlash: 'never',
	// Inline all CSS so the first paint never waits on a stylesheet request.
	build: { inlineStylesheets: 'always' },
	// Catalogue photos are optimized at build time from their postimg originals.
	image: { domains: ['i.postimg.cc'] },
});
