const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.client')

config.devtool = false;
config.output.filename = '[name].bundle.js'

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': JSON.stringify('production')
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    },
    comments: false
  }),
  new ExtractTextPlugin('[name].[contenthash].css')
])

config.vue.loaders = {
  css: ExtractTextPlugin.extract(
    'vue-style-loader',
    'css-loader?sourceMap'
  )
}

module.exports = config