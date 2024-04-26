import { BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_DETAILS_FAIL } from "../../actionTypes/blogs/blogDetailsType"

export const blogDetailsRequest = (data)=> {
   return {
    type: BLOG_DETAILS_REQUEST,
    payload: data
   }
}

export const blogDetailsSuccess = (data)=>{
    return {
        type: BLOG_DETAILS_SUCCESS,
        payload: data
       }
}

export const blogDetailsError = (err)=>{
    return {
        type: BLOG_DETAILS_FAIL,
        payload: err
       }
}
