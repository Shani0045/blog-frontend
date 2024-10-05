import {getRequest, postRequest} from '../../utils/apis'

const BASE_URL = 'http://127.0.0.1:8000'

let Blog_url = BASE_URL+"/blogs/blog-details/"

let all_blogs = BASE_URL+"/blogs/all-blogs/"

let Blog_post_url = BASE_URL+"/blogs/blog-post/"
let categories_url = BASE_URL+"/blogs/all-category/"


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

export const allCategories = async() =>{
  let resp = await getRequest({url:categories_url, data:{}})
  return resp
}

