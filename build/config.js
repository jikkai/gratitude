import path from 'path'

export default {
  build : {
    index: path.resolve(__dirname,'../dist/index.html'),
    assetsRoots: path.resolve(__dirname,'../dist'),
    aassetsPublicPath: '../',
  }
}