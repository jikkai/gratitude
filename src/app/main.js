import Vue from 'vue'
import App from './App'

module.exports = new Vue({
  render: h => h.call(this, App)
})
