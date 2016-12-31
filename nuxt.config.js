const { join } = require('path')

module.exports = {
  css: [
    'typo.css/typo.css',
    'font-awesome/css/font-awesome.min.css',
    join(__dirname, 'styles/main.css')
  ],
  build: {
    postcss: [
      require('postcss-cssnext')({
        browsers: ['last 3 versions']
      })
    ]
  }
}