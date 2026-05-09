import { ref } from 'vue'
import { getCategoryListAPI } from '@/apis/category'

export function useCategory() {
  const categoryData = ref(null)
  
  const getCategory = async (id) => {
    const res = await getCategoryListAPI(id)
    categoryData.value = res.result
    return categoryData.value
  }
  
  const emitCategory = (callback) => {
    if (categoryData.value && callback) {
      callback(categoryData.value)
    }
  }
  
  return {
    categoryData,
    getCategory,
    emitCategory
  }
}