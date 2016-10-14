const path = require('path')
const externals = require('webpack-node-externals')

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
    extensions: ['', '.js', '.vue', '.css', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.vue$/,
        loaders: ['vue']
      },
      {
        test: /\.css$/,
        loader: 'css',
        query: {
          name : 'server.css'
        }
      },
      {
        test: /\.scss$/,
        loader: 'sass'
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      }
    ]
  },
  externals: [externals()],
  plugins: []
}
