import http from '@/utlis/http'
export const getPayInfoAPI = (id) => {
  return http({
    url: `/member/order/${id}`,
    method: 'GET',
    params: {
      id
    }
  })
}
