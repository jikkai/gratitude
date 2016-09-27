import path from 'path'
import webpack from 'webpack'

const hotMiddlewareScript = 'webpack-hot-middleware/client?noInfo=false&reload=true'

export default {
  entry: {
    app: [
      './src/app/main',
      hotMiddlewareScript
    ]
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      app: path.resolve(__dirname, '../src/app'),
      client: path.resolve(__dirname, '../src/client'),
      server: path.resolve(__dirname, '../src/server')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name : 'static/images/[name].[ext]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      css: 'vue-style!css'
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}