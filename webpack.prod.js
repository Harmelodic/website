const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require("webpack")
const config = require('./webpack.config.js');

module.exports = merge(config, {
    plugins: [
        new MinifyPlugin(),
        new UglifyJSPlugin(),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});