// createRouter 创建路由实例
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
// 路由懒加载 - 将静态导入改为动态导入
const Login = () => import('@/views/Login/index.vue')
const Layout = () => import('@/views/Layout/index.vue')
const Home = () => import('@/views/Home/index.vue')
const Category = () => import('@/views/Category/index.vue')
const SubCategory = () => import('@/views/SubCategory/index.vue')
const Detail = () => import('@/views/Detail/index.vue')
const CartList = () => import('@/views/CartList/index.vue')
const Checkout = () => import('@/views/Checkout/index.vue')
const Pay = () => import('@/views/Pay/index.vue')
const PayBack = () => import('@/views/Pay/PayBack.vue')
const Member = () => import('@/views/Member/index.vue')
const User = () => import('@/views/Member/components/User.vue')
const Order = () => import('@/views/Member/components/Order.vue')
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
