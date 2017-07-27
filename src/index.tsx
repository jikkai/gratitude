import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './styles/main'

import Router from './router'

ReactDOM.render(
  <Router />,
  document.querySelector('#app')
)

// React hot reload
if (module.hot) {
  module.hot.accept()
}
