/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				white: 'var(--color-white)',
				rubinas: 'var(--color-rubinas)',
				perlas: 'var(--color-perlas)',
				border: 'var(--color-border)',
			},
		},
	},
	plugins: [],
};
