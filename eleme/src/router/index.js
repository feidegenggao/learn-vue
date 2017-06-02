import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Hello from '@/components/Hello'
import Goods from '@/components/Goods'
import Rating from '@/components/Rating'
import Seller from '@/components/Seller'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Goods//这个地方设置APP的默认页面，我设为了物品的页面
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/rating',
      component: Rating
    },
    {
      path: '/seller',
      component: Seller
    }
  ]
})
