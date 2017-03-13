const path = require('path')

module.exports = {
  head: {
    titleTemplate: 'Period',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
    ],
    link: [
      { rel: 'icon', href: 'favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Satisfy' }
    ]
  },
  css: [
    path.join(__dirname, 'styles/main.css')
  ],
  build: {
    postcss: [
      require('postcss-salad')({
        browsers: ['ie > 8', 'last 2 version'],
        features: {
          bem: {
            shortcuts: {
              component: 'c',
              modifier: 'm',
              descendent: 'd'
            },
            separators: {
              modifier: '--',
              descendent: '__'
            }
          }
        }
      })
    ]
  }
}
