import { ref } from 'vue'
import { getHomeBannerAPI } from '@/apis/home'

export function useBanner() {
  const bannerList = ref([])
  
  const getBanner = async (params = {}) => {
    const defaultParams = { distributionsite: '2' }
    const res = await getHomeBannerAPI({ ...defaultParams, ...params })
    bannerList.value = res.result
    return bannerList.value
  }
  
  return {
    bannerList,
    getBanner
  }
}