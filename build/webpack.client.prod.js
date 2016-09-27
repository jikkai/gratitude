import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from './webpack.client'

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

export default config