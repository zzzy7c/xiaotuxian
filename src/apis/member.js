import http from '@/utlis/http'
export const getLikeListAPI = ({ limit = 4 }) => {
  return http({
    url: '/goods/relevant',
    method: 'GET',
    params: {
      limit
    }
  })
}
/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
  return http({
    url: '/member/order',
    method: 'GET',
    params
  })
}
