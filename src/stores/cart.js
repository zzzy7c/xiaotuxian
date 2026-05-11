import { defineStore } from 'pinia'
import { ref,computed } from 'vue'
import { addCartAPI, delCartAPI, getCartListAPI } from '@/apis/cart'
import { useUserStore } from '@/stores/user'
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])
  const newCartList = async (_List) => {
    // await mergeCartAPI(List)
    const res = await getCartListAPI()
    // cartList.value = res.result || []
    cartList.value.splice(0,cartList.value.length,...res.result)
    // console.log(cartList,res)
  }
  const addCart = async (goods,count = 1) => {
    if(isLogin.value){
      await addCartAPI(goods.skuId,goods.count)
      await newCartList()
      // console.log(cartList.value)
    } else {
      const item = cartList.value.find((item) => item.skuId === goods.skuId)
      if(item) {
        item.count += count
      }
      else {
        cartList.value.push(goods)
      }
    }
  }
  const delCart = async (skuId) => {
    if(isLogin.value){
      // console.log(cartList)
      await delCartAPI([skuId])
      await newCartList()
      // console.log('登陆情况下删除成功')
      // console.log(cartList)
    } else {
      const index = cartList.value.findIndex((item) => item.skuId === skuId)
      cartList.value.splice(index,1)
      // console.log('未登陆情况下删除成功')
    }
  }
  // 退出时清除购物车
  const clearCart = () => {
    cartList.value = []
  }
  const singleCheck = (skuId,selected) => {
    const item = cartList.value.find((item) => item.skuId === skuId)
    item.selected = selected
  }
  const allCheck = (selected) => {
    cartList.value.forEach((item) => {
      item.selected = selected
    })
  }
  const allCount = computed(() => cartList.value.reduce((sum, item) => sum + item.count, 0))
  const allPrice = computed(() => cartList.value.reduce((sum, item) => sum + item.count * item.price, 0))
  const isAll = computed(() => cartList.value.every(item => item.selected))
  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    addCart,
    delCart,
    singleCheck,
    allCheck,
    clearCart,
    newCartList,
  }
},{
  persist: true
})
