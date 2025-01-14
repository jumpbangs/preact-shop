import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	themes: ['luxury'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
};
