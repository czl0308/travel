// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// 重置默认样式
import './assets/css/reset.css'
// 1 像素边框
import './assets/css/border.css'

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

// 使用 fastclick 库
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
