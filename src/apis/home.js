import httpInstance from '@/utlis/http'
function getHomeBannerAPI (params = {}) {
  const { distributionsite = '1' } = params
  return httpInstance ({
    url: '/home/banner',
    params: {
      distributionsite
    }
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
