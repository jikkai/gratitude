module.exports = {
  browsers: ['ie > 8', 'last 2 versions'],
  plugins: {
    'postcss-salad': {
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    }
  }
}
