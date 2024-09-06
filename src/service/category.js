import http from "./api"
const category = {
   category_get: ()=> http.get("/categories?page=1&limit=10"),
   category_delete: ()=> http.get(`/category/id${id}`),

}
export default category