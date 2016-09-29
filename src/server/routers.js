import { createRenderer } from 'vue-server-renderer'
import combinedStream from 'combined-stream'
import str from 'string-to-stream'

import vm from '../app/main.js'

const { renderToStream } = createRenderer()

const template = vmStream => {
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
    <body>`)
  )

  stream.append(vmStream)
      
  stream.append(str(`
      <script src='./app.bundle.js'></script>
    </body>
    </html>`)
  )

  return stream
}

export default (router) => {
  router.get('/', (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'

    ctx.body = template(renderToStream(vm))
  })
}