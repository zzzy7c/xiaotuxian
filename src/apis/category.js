import httpInstance from "@/utlis/http"
function getCategoryListAPI(id) {
  return httpInstance({
    url: "/category",
    params: {
      id
    }
  })
}
function getCategoryFilterAPI (id) {
  return httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
function getSubCategoryAPI (data) {
  return httpInstance({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
export {
  getCategoryListAPI,
  getCategoryFilterAPI,
  getSubCategoryAPI,
}
