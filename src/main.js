// webpack的入口文件

// 引入vue,根组件,路由
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入移动端点击库,防止 300 延迟和点击穿透
import fastclick from 'fastclick'
// 重置默认样式
import './assets/styles/reset.css'
// 1像素边框
import './assets/styles/border.css'

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
