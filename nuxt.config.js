const path = require('path')

module.exports = {
  head: {
    titleTemplate: 'Gratitude',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  css: [
    'typo.css/typo.css',
    'font-awesome/css/font-awesome.min.css',
    path.join(__dirname, 'styles/main.css')
  ],
  build: {
    postcss: [
      require('postcss-cssnext')({
        browsers: ['last 3 versions']
      })
    ]
  }
}