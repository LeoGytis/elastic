/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				white: 'hsl(var(--color-white) / <alpha-value>)',
				rubinas: 'hsl(var(--color-rubinas) / <alpha-value>)',
				perlas: 'hsl(var(--color-perlas) / <alpha-value>)',
				border: 'hsl(var(--color-border) / <alpha-value>)',
			},
			boxShadow: {
				navbar: '0px 4px 16px 0px rgba(0,0,0,0.02)',
			},
		},
	},
	plugins: [],
};
