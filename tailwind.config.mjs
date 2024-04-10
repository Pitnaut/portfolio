/** @type {import('tailwindcss').Config} */
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
							'open': '65vh',
							'shrink': '7vh',
					},
					transitionTimingFunction: {
						'ease-custom': 'ease-in-out',
					},
					transitionDuration: {
						'custom1s': '1s',
					},
				
			},
	},
	plugins: [],
}