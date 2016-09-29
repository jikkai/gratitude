const path = require('path')

module.exports = {
  build : {
    index: path.resolve(__dirname,'../dist/index.html'),
    assetsRoots: path.resolve(__dirname,'../dist'),
    aassetsPublicPath: '../',
  }
}