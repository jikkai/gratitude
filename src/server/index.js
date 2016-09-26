import path from 'path'
import Koa from 'koa'
import convert from 'koa-convert'
import serve from 'koa-static'
import CombinedStream from 'combined-stream'
import str from 'string-to-stream'
const renderer = require('vue-server-renderer').createRenderer()
const renderToStream = renderer.renderToStream

import vm from '../app/main.js'

import webpack from 'webpack'
import webpackConfig from '../../build/webpack.client.js'
const compiler = webpack(webpackConfig)
const devMiddleware = require('koa-webpack-dev-middleware')
const hotMiddleware = require('koa-webpack-hot-middleware')

const app = new Koa()

app.use(convert(devMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})))
app.use(convert(hotMiddleware(compiler)))

app.use(serve(path.join(process.cwd(), 'dist'), {}))


app.use((ctx) => {
  ctx.type = 'text/html; charset=utf-8'
  const title = 'test'
  const stream = CombinedStream.create()
  stream.append(str(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
      </head>
      <body>`))
        stream.append(renderToStream(vm))
        stream.append(`
        <script src='./app.bundle.js'></script>
      </body>
    </html>
  `)
  ctx.body = stream
})


const port = 5000
app.listen(port, () => {
  console.log(`==> Listening at http://localhost:${port}`)
})