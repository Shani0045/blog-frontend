import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAIL } from "../../actionTypes/blogs/CategoriesType"

export const categoriesRequest = ()=> {
   return {
    type: CATEGORIES_REQUEST,
    payload: {}
   }
}

export const categoriesSuccess = (data)=>{
    return {
        type: CATEGORIES_SUCCESS,
        payload: data
       }
}

export const categoriesError = (err)=>{
    return {
        type: CATEGORIES_FAIL,
        payload: err
       }
}
