import {getRequest} from '../utils/apis'

let BASE_URL1 = "https://jsonplaceholder.typicode.com/posts/1"
let BASE_URL = "https://dummyjson.com/products"
let Blog_url = "http://127.0.0.1:8000/blogs/get-blog/"


export const blogDetails = async (slug)=> {
  let resp = await getRequest({url: Blog_url+slug})
  return resp
}
