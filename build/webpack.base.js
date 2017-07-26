const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')

module.exports = {
  entry: {
    client: './src/index.tsx'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.json'],
    alias: {
      '~': path.join(__dirname, '../src')
    }
  },
  performance: {},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.(ico|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      favicon: __dirname + '/favicon.png',
      template: __dirname + '/index.html',
      filename: './index.html'
    })
  ]
}
