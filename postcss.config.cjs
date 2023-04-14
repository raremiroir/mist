// const each = require('postcss-each')
// const simpleVars = require('postcss-simple-vars')
// const focus = require('postcss-focus')
// const darkThemeClass = require('postcss-dark-theme-class')

// const mediaMinmax = require('postcss-media-minmax')
// const easings = require('postcss-easings')
// const mixins = require('postcss-mixins')
// const size = require('postcss-size')

module.exports = {
	plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': 'postcss-nesting',
		'postcss-each': {},
		'postcss-simple-vars': {},
		'postcss-focus': {},
		'postcss-dark-theme-class': {},

		tailwindcss: {},
		autoprefixer: {},
	}
};