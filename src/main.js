// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/*  三百毫秒点击延迟问题，在使用click事件时，会延迟300毫秒  */
import fastClick from 'fastclick'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
/*  一像素边框解决方案  scale放大缩小来解决  */
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
/*  将fastclick自带的方法绑定到body上，   三步1安装2引入3绑定  */
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
// 跟实例里的库，可以派发到各个子组件
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
