const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('@babel/register');
const path = require('path');
const MODE = 'development';

module.exports = [
  {
    mode: 'development',
    entry: path.join(__dirname, 'src/js/main.jsx'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'js/main.js'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.jsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      })
    ]
  },
  
];
module.exports.serve = {
  content: [path.resolve(__dirname, 'dist/')],
  open: true
};
