const SRC = __dirname + '/src/';
const PUBLIC = __dirname + '/public/';

module.exports = {
  entry: SRC + 'index.js',
  output: {
    path: PUBLIC + '/js/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].[contenthash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
          ],
        },
      },
    ],
  },
};
