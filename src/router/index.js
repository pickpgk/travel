import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    // detail后加一个冒号就是动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  // scrollBehavior  意思是每次做路由切换时，都让新进入的显示页面Xy轴初始位置为零
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
