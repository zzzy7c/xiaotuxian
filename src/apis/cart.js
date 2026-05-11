import http from '@/utlis/http'
export const addCartAPI = (skuId,count = 1) => {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}
export const delCartAPI = (ids) => {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
export const mergeCartAPI = (data) => {
  return http({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}
export const getCartListAPI = () => {
  return http({
    url: '/member/cart',
    method: 'GET'
  })
}
