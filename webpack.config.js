const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    hot: false
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
