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
					colors: {
						'body-color': '#cafcd5',
						'bio-color': '#d9f4c5',
						'studies-color': '#e8eabb',
						'work-color': '#f3e1b8',
						'projects-color': '#fbd8ba',
						'social-color': '#fed0c1',
						'contact-color': '#fccaca',
					}
			},
	},
	plugins: [],
}