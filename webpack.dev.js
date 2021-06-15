const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
	devtool: 'inline-source-map',
	mode: 'development',
	plugins: [
		new webpack.EnvironmentPlugin({
			BLOG_API: 'https://api.scribbles.harmelodic.com',
			BLOG_CONTENT_SERVER: 'https://harmelodic.gitlab.io/scribbles-content',
		}),
	],
});
