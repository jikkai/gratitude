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
    extensions: ['.js', '.vue', '.css', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loaders: ['vue-loader']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [/node_modules/]
      }
    ]
  },
  externals: [externals()],
  plugins: []
}
