// /** @type {import('tailwindcss').Config} */
// module.exports = {
// 	content: ['./src/**/*.{js,jsx,ts,tsx}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// }



/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi',  'Arial', 'sans-serif'], 
				nunito: ['Nunito Sans', 'sans-serif'],
			},
			
			fontWeight: {
				regular: 400,
				bold: 700,
				black: 900,
				semiBold:500
			},
		},
	},
	plugins: [],
};
