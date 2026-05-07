import httpInstance from '@/utlis/http'

export function getCategory(){
  return httpInstance({
    url: 'home/category/head'
  })
}
