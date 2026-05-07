import httpInstance from '@/utlis/http'
export function getCategoryAPI() {
  return httpInstance({
    url: '/home/category/head'
  })
}
