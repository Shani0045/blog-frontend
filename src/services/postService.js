import {getRequest} from '../utils/apis'

let BASE_URL1 = "https://jsonplaceholder.typicode.com/posts/1"
let BASE_URL = "https://dummyjson.com/products"


export const getAllPosts = async ()=> {
  let resp = await getRequest({url: BASE_URL})
  return resp
}
