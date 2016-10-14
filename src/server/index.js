import path from 'path'

import Koa from 'koa'
import koaRouter from 'koa-router'
import koaConvert from 'koa-convert'
import koaStatic from 'koa-static'

import routers from './routers'
import 'nodejs-dashboard'

const app = new Koa()
const router = koaRouter()

routers(router)

app.use(koaStatic(path.join(process.cwd(), '/'), {}))

app.use(router.routes())

const port = process.env.PORT ? process.env.PORT : 5555
app.listen(port, () => {
  console.log(`==> Listening at http://localhost:${port}`)
})