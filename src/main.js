// webpack的入口文件

// 引入vue,根组件,路由
import Vue from 'vue'
import App from './App'
import router from './router'
// 重置默认样式
import './assets/styles/reset.css'
// 1像素边框
import './assets/styles/border.css'
// 引入swiper滑动库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
