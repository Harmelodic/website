const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      BLOG_API: 'https://api.scribbles.harmelodic.com',
    }),
  ],
});
