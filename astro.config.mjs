// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Inline all CSS so the first paint never waits on a stylesheet request.
	build: { inlineStylesheets: 'always' },
});
