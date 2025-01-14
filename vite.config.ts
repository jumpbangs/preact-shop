import preact from '@preact/preset-vite';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		open: true,
	},
	plugins: [
		preact({
			prerender: {
				enabled: true,
				renderTarget: '#app',
				additionalPrerenderRoutes: ['/404'],
				previewMiddlewareEnabled: true,
				previewMiddlewareFallback: '/404',
			},
		}),
	],
	css: {
		postcss: './postcss.config.js',
	},
	resolve: {
		alias: {
			pages: path.resolve(__dirname, './src/pages'),
			assets: path.resolve(__dirname, './src/assets'),
			services: path.resolve(__dirname, './src/services'),
			components: path.resolve(__dirname, './src/components'),
			store: path.resolve(__dirname, './src/store'),
		},
	},
});
