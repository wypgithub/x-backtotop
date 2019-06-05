import toTop from './x-backToTop.vue'

const backToTop = {
  install: function (Vue) {
    Vue.component(toTop.name, toTop)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(backToTop)
}

export default backToTop
