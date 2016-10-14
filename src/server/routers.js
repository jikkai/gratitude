import { createRenderer } from 'vue-server-renderer'
import combinedStream from 'combined-stream'
import str from 'string-to-stream'

import vm from '../app/main.js'

const { renderToStream } = createRenderer()

const template = vmStream => {
  const title = 'Gratitude'

  const stream = combinedStream.create()

  stream.append(str(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">

      <link href="//cdn.bootcss.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
      <link rel="stylesheet" href="server.css">
    </head>
    <body>`)
  )

  stream.append(vmStream)
      
  stream.append(str(`
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