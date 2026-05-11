import http from '@/utlis/http'
export const getCheckoutInfoAPI = () => {
  return http({
    url: '/member/order/pre',
    method: 'GET'
  })
}
export const createOrderAPI = (data) => {
  return http({
    url: '/member/order',
    method: 'POST',
    data
  })
}
