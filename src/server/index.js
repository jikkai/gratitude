import path from 'path'

import Koa from 'koa'
import koaRouter from 'koa-router'
import koaConvert from 'koa-convert'
import koaStatic from 'koa-static'

import webpack from 'webpack'
import webpackDevMiddleware from 'koa-webpack-dev-middleware'
import webpackHotMiddleware from 'koa-webpack-hot-middleware'

import routers from './routers'
import config from '../../build/webpack.client'
import 'nodejs-dashboard'

const app = new Koa()
const router = koaRouter()
const compiler = webpack(config)

routers(router)

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

const port = process.env.PORT ? process.env.PORT : 5555
app.listen(port, () => {
  console.log(`==> Listening at http://localhost:${port}`)
})