const path = require('path')
const webpack = require('webpack')
const externals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  target: 'node',
  entry: [
    './src/server/index.js'
  ],
  output: {
    path: process.cwd(),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.css', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: ['vue-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: [{ loader: 'css-loader' }, 'postcss-loader'],
          fallbackLoader: 'style-loader'
        })
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      }
    ]
  },
  externals: [externals()],
  plugins: [
    new ExtractTextPlugin('server.css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        postcss: [
          require('postcss-cssnext')({
            browsers: ['last 2 versions', 'ie > 8']
          })
        ]
      }
    })
  ]
}
