const fs = require('fs')
const path = require('path')
const art = require('art-template')
const rimraf = require('rimraf')
const config = require('../config/config.default')

const rootPath = path.join(__dirname, '../')

const pagesPath = `${rootPath}/src/pages/`
const publicPath = `${rootPath}/public/`

rimraf(publicPath, err => {
  if (err) throw new Error(`${err.name}: ${err.message}`)
  fs.mkdirSync(publicPath, 0777)

  fs.readdir(pagesPath, (err, files) => {
    if (err) throw new Error(`${err.name}: ${err.message}`)

    for (let file of files) {
      const filePath = `${pagesPath}/${file}`
      const filename = file.replace('.art', '.html')
      const outputFile = `${publicPath}/${filename}`

      const html = art(filePath, config)

      fs.writeFile(outputFile, html, err => {
        if (err) throw new Error(`${err.name}: ${err.message}`)
          console.log(`output: ${filename}`)
      })
    }
  })
})
