import Vue from 'vue'
import counter from './counter'

if (typeof window !== 'undefined') {
  new Vue({
    el: '#app',
    render: h => h(counter)
  })
} else {
  module.exports = new Vue({
    render: h => h.call(this, counter)
  })
}
