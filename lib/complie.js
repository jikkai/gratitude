const fs = require('fs-extra')
const path = require('path')
const art = require('art-template')
const postcss = require('postcss')
const salad = require('postcss-salad')
const config = require('../config/config.default')

const rootPath = path.join(__dirname, '..')
const publicPath = `${rootPath}/public`
const pagesPath = `${rootPath}/src/pages`
const staticPath = `${rootPath}/src/static`
const sourcePath = `${rootPath}/src/source`

fs.removeSync(publicPath)
fs.mkdirSync(publicPath, 0777)

// complie html
fs.readdir(pagesPath, (err, files) => {
  if (err) throw new Error(`${err.name}: ${err.message}`)

  for (let file of files) {
    const filePath = `${pagesPath}/${file}`
    let filename = file.replace('.art', '')
    let outputPath = `${publicPath}/${filename}`
    let outputFile = `${outputPath}/index.html`

    const html = art(filePath, config)

    if (file === 'index.art') {
      outputFile = `${publicPath}/index.html`
    } else {
      fs.mkdirSync(outputPath, 0777)
    }
    fs.writeFileSync(outputFile, html)
  }
})

// move static file
fs.copy(staticPath, `${publicPath}/static`)

// complie styles
const css = fs.readFileSync(`${sourcePath}/styles/app.css`)
postcss([salad({
  browsers: ['ie > 8', 'last 2 version'],
  features: {
    bem: {
      shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
      separators: { modifier: '--', descendent: '__' }
    }
  }
})]).process(css, {
  from: `${sourcePath}/styles/app.css`,
  to: `${publicPath}/static/app.css`
}).then(result => {
  fs.writeFileSync(`${publicPath}/static/app.css`, result.css)
})
