import Vue from 'vue'
import App from './App'

import './server.css'

module.exports = new Vue({
  render: h => h.call(this, App)
})
