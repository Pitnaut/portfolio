/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			extend: {
					fontFamily: {
							'rubik': ['Rubik Mono One', 'sans-serif']
					},
					height: {
							'open': '65vh',
							'shrink': '7vh',
					},
					animation: {
							'fade-in': 'fadeIn 0.5s ease-in-out',
					},
					keyframes: {
							fadeIn: {
									'0%': { opacity: '0' },
									'100%': { opacity: '1' },
							},
					},
			},
	},
	plugins: [],
}