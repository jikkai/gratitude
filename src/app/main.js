import Vue from 'vue'
import App from './demo.vue'

if (typeof window !== 'undefined') {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
} else {
  module.exports = new Vue({
    render: h => h.call(this, App)
  })
}
