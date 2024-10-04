import {getRequest, postRequest} from '../../utils/apis'

let BASE_URL1 = "https://jsonplaceholder.typicode.com/posts/1"
let BASE_URL = "https://dummyjson.com/products"
let Blog_url = "http://127.0.0.1:8000/blogs/blog-details/"

let all_blogs = "http://127.0.0.1:8000/blogs/all-blogs/"

let Blog_post_url = "http://127.0.0.1:8000/blogs/blog-post/"


export const blogDetails = async (slug)=> {
  let resp = await getRequest({url: Blog_url+slug})
  return resp
}


export const allBlogs = async (payload)=> {
  let resp = await getRequest({url: all_blogs, params: payload})
  return resp
}


export const postBlog = async(data) =>{
  let resp = await postRequest({url:Blog_post_url, data:data})
  return resp
}

