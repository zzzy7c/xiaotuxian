import http from '@/utlis/http'
export const loginAPI = (account,password) => {
  return http({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

