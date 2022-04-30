const SRC = __dirname + '/src/';
const PUBLIC = __dirname + '/public/';

module.exports = {
	devServer: {
		compress: true,
		static: {
			directory: PUBLIC,
		},
		historyApiFallback: true,
		hot: true,
	},
	entry: SRC + 'index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						['@babel/preset-react', {
							'runtime': 'automatic',
						}],
					],
				},
			},
		],
	},
	output: {
		chunkFilename: 'js-[name].[contenthash].bundle.js',
		filename: 'js-[name].bundle.js',
		path: PUBLIC,
	},
};
