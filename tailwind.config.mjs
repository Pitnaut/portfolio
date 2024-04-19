/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
			extend: {
					fontFamily: {
							'questrial': ['Questrial', 'sans-serif'],
					},
					fontSize: {
						'customsize': '3.25rem'
					},
					height: {
							'open': '70vh',
							'shrink': '7.5vh',
					},
					transitionTimingFunction: {
						'ease-custom': 'ease-in-out',
					},
					transitionDuration: {
						'custom1s': '1s',
					},
					colors: {
						'body-color': '#dbffd7',
						'bio-color': '#eaf6cb',
						'studies-color': '#f7ecc6',
						'work-color': '#ffe3c7',
						'projects-color': '#ffdcce',
						'contact-color': '#ffd6d6',
					},				
			},
	},
	plugins: [
		require('tailwindcss-animated'),
		animations
	],
}