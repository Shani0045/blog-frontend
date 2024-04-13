import { POST_FAIL, POST_REQUEST, POST_SUCCESS } from "../actionTypes/postType"

export const getAllPostRequest = ()=> {
   return {
    type: POST_REQUEST,
    payload: {}
   }
}

export const getAllPostSuccess = (data)=>{
    return {
        type: POST_SUCCESS,
        payload: data
       }
}

export const getAllPostError = (err)=>{
    return {
        type: POST_FAIL,
        payload: err
       }
}
