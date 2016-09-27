import path from 'path'

import Koa from 'koa'
import koaRouter from 'koa-router'
import koaConvert from 'koa-convert'
import koaStatic from 'koa-static'

import webpack from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'

import combinedStream from 'combined-stream'
import str from 'string-to-stream'

import { createRenderer } from 'vue-server-renderer'

import vm from '../app/main.js'
import config from '../../build/webpack.client'


const app = new Koa()
const router = koaRouter()

const renderToStream = createRenderer().renderToStream

const compiler = webpack(config)


router.get('/count', (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8'
  const title = 'test'
  const stream = combinedStream.create()
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

app.use(koaConvert(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }
})))
app.use(koaConvert(webpackHotMiddleware(compiler)))

app.use(koaStatic(path.join(process.cwd(), 'dist'), {}))

app.use(router.routes())

const port = 5000
app.listen(port, () => {
  console.log(`==> Listening at http://localhost:${port}`)
})