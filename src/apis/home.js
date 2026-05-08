import httpInstance from '@/utlis/http'
function getHomeBannerAPI () {
  return httpInstance ({
    url: '/home/banner'
  })
}
function getHomeNewAPI() {
  return httpInstance ({
    url: '/home/new'
  })
}
function getHomeHotAPI() {
  return httpInstance ({
    url: '/home/hot'
  })
}
function getGoodsAPI() {
  return httpInstance ({
    url: '/home/goods'
  })
}
export {
  getHomeBannerAPI,
  getHomeNewAPI,
  getHomeHotAPI,
  getGoodsAPI,
}
