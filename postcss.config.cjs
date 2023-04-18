const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
const tailwindcssNesting = require('tailwindcss/nesting');
const postcssNesting = require('tailwindcss/nesting');
const postcssEach = require('postcss-each');
const postcssAtRulesVariables = require('postcss-at-rules-variables');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssFocus = require('postcss-focus');
const postcssDarkThemeClass = require('postcss-dark-theme-class');
const postcssNormalize = require('postcss-normalize');
const postcssNano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
	// map: true,
	plugins: [
		postcssImport,
		postcssMixins,
		postcssNormalize,
		postcssSimpleVars({
			silent: false,
		}),
		tailwindcssNesting(postcssNesting),
		postcssEach({
			plugins: {
				afterEach: [
					postcssAtRulesVariables,
				],
				beforeEach: [
					postcssCustomProperties,
				]
			 }
		}),
		// 'postcss-focus': {},
		// 'postcss-dark-theme-class': {},
		postcssNano({
			preset: 'default',
		}),
		tailwindcss,
		autoprefixer,
	]
};