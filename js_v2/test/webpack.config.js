'use strict';

let path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
	mode: 'development',
	entry: './src/js/script.js',
	output: {
		filename: 'bundle.js',
		// eslint-disable-next-line no-undef
		path: __dirname + '/dist/js'
	},
	watch: true,
	devtool: 'source-map',
	module: {}
};