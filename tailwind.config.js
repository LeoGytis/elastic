/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				white: 'hsl(var(--color-white) / <alpha-value>)',
				rubinas: 'hsl(var(--color-rubinas) / <alpha-value>)',
				perlas: 'hsl(var(--color-perlas) / <alpha-value>)',
				border: 'hsl(var(--color-border) / <alpha-value>)',
			},
			boxShadow: {
				navbar: '0px 4px 16px 0px rgba(0,0,0,0.02)',
			},
			maxWidth: {
				'8xl': '1536px',
			},
			container: {
				padding: {
					DEFAULT: '1.5rem', // px-6
				},
			},
		},
	},
	plugins: [],
};
