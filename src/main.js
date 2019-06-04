import Vue from 'vue'
import App from './App.vue'

import backTop from './lib/index'

Vue.use(backTop)


new Vue({
  el: '#app',
  render: h => h(App)
})
