/* eslint-disable unicorn/prefer-module */

const defaults = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
//"**/*.tsx"
module.exports = {
	content: ['**/*.tsx', "**/**/**/**/*.tsx"],
	darkMode: 'media',
	theme: {
		extend: {
			fontFamily: {
				...defaults.fontFamily,
				sans: ['Roboto', ...defaults.fontFamily.sans],
				'Lato': ['Lato', 'sans-serif'] 
			},
		},
	},
	variants: {
		typography: ['dark'],
		animation: ['motion-safe'],
	},
};