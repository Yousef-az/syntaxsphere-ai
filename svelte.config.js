import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {

    // Use svelte-preprocess instead of vitePreprocess
    preprocess: sveltePreprocess({
        // Options for svelte-preprocess
        postcss: true, // Enable PostCSS
    }),

    kit: {
        adapter: adapter(),

        alias: {
            $lib: './src/lib',
            $components: './src/lib/components',
            $stores: './src/lib/stores',
            $utils: './src/lib/utils',
            $types: './src/lib/types',
            $services: './src/lib/services'
        }
    }
};

export default config;