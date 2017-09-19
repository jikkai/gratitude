module.exports = {
  head: {
    titleTemplate: 'Period',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Alegreya+Sans+SC:100|Work+Sans:100' },
      { rel: 'icon', href: '/favicon.png' }
    ]
  },
  build: {
    analyze: true,
    postcss: [
      require('postcss-salad')()
    ]
  }
}