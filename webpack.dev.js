const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
	devtool: 'inline-source-map',
	mode: 'development',
	plugins: [
		new webpack.EnvironmentPlugin({
			BLOG_API: 'https://blog.api.harmelodic.com',
			BLOG_CONTENT_SERVER: 'https://storage.googleapis.com/harmelodic-web-static-prod',
			GITHUB_API: 'https://api.github.com',
		}),
	],
});
