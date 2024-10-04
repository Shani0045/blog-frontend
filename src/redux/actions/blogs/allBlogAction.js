import {ALL_BLOG_REQUEST, ALL_BLOG_SUCCESS, ALL_BLOG_FAIL } from "../../actionTypes/blogs/allBlogType"

export const allBlogRequest = (payload)=> {
   return {
    type: ALL_BLOG_REQUEST,
    payload: payload
   }
}

export const allBlogSuccess = (data)=>{
    return {
        type: ALL_BLOG_SUCCESS,
        payload: data
       }
}

export const allBlogError = (err)=>{
    return {
        type: ALL_BLOG_FAIL,
        payload: err
       }
}
