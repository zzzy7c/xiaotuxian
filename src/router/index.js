// createRouter 创建路由实例
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import User from '@/views/Member/components/User.vue'
import Order from '@/views/Member/components/Order.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: Layout,
      children: [{
        path: '',
        component: Home,
      },
      {
        path: '/Category/:id',
        component: Category,
      },
      {
        path: '/Category/sub/:id' ,
        component: SubCategory,
      },
      {
        path: '/Detail/:id',
        component: Detail,
      },
      {
        path: '/CartList',
        component: CartList,
      },
      {
        path: '/Checkout',
        component: Checkout,
      },
      {
        path: '/pay',
        component: Pay,
      },
      {
        path: 'paycallback',
        component: PayBack
      },
      {
        path: 'member',
        component: Member,
        children: [{
          path: '',
          component: User,
        },
        {
          path: 'order',
          component: Order,
        }]
      }]
    }
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  }
})

export default router
