var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: './src/App.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
        test: /\.js$/,
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './stylesheets')]
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
};

module.exports = config;