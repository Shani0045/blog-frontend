import { COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_FAIL } from "../../actionTypes/blogs/commentsType"

export const commentsRequest = (data)=> {
   return {
    type: COMMENTS_REQUEST,
    payload: data
   }
}

export const commentsSuccess = (data)=>{
    return {
        type: COMMENTS_SUCCESS,
        payload: data
       }
}

export const commentsError = (err)=>{
    return {
        type: COMMENTS_FAIL,
        payload: err
       }
}
