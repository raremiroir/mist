const each = require('postcss-each')
const simpleVars = require('postcss-simple-vars')
const mediaMinmax = require('postcss-media-minmax')
const nested = require('postcss-nested')
const focus = require('postcss-focus')
const darkThemeClass = require('postcss-dark-theme-class')
const easings = require('postcss-easings')
const mixins = require('postcss-mixins')
const size = require('postcss-size')

const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

const config = {
	plugins: [
		each,
		simpleVars,
		mediaMinmax,
		nested,
		focus,
		darkThemeClass,
		easings,
		mixins,
		size,

		autoprefixer,
		tailwindcss
	]
};

module.exports = config;
