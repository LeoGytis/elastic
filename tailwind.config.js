/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				white: 'var(--color-white)',
				// rubinas: 'var(--color-rubinas)',
				rubinas: 'hsl(var(--color-rubinas) / <alpha-value>)',
				perlas: 'var(--color-perlas)',
				border: 'var(--color-border)',
			},
			boxShadow: {
				navbar: '0px 4px 16px 0px rgba(0,0,0,0.02)',
			},
		},
	},
	plugins: [],
};
