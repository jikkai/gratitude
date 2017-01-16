const path = require('path')

module.exports = {
  head: {
    titleTemplate: 'Gratitude',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', href: 'favicon.png' }
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
              component: 'b',
              modifier: 'm',
              descendent: 'e'
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