import httpInstance from "@/utlis/http"
function getCategoryListAPI(id) {
  return httpInstance({
    url: "/category",
    params: {
      id
    }
  })
}
export {
  getCategoryListAPI,
}
