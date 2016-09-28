import { createRenderer } from 'vue-server-renderer'
import combinedStream from 'combined-stream'
import str from 'string-to-stream'

import vm from '../app/main.js'

const renderToStream = createRenderer().renderToStream


export default (router) => {
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
}