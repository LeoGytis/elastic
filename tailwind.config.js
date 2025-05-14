/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				rubinas: 'var(--color-rubinas)',
				perlas: 'var(--color-perlas)',
			},
		},
	},
	plugins: [],
};
