import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const httpInstance = axios.create({
  baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 10000,
})
// 请求拦截器
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  const userStore = useUserStore()
  // 401token失效处理
  if(e.response.status === 401){
    userStore.clearUserInfo()
    router.replace({path:'/login'})
  }
  return Promise.reject(e)
})

export default httpInstance
