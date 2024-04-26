// import postType from '../actionTypes/postType'

import { ALL_BLOG_REQUEST, ALL_BLOG_SUCCESS, ALL_BLOG_FAIL } from "../../actionTypes/blogs/allBlogType";

const initialState = {
      loading: false,
      error: null,
      data: {}
  };

const allBlogReducer = (state = initialState, action) => {

    switch (action.type) {
      case ALL_BLOG_REQUEST:
        return {
          ...state,
          loading : true
        };
  
      case ALL_BLOG_SUCCESS:
        return {
          ...state,
            loading: false,
            error: null,
            data: action.payload
        };
  
      case ALL_BLOG_FAIL:
        return {
          ...state,
            loading: false,
            data: {},
            error: action.payload
        };

      default:
        return state;
    }
};

export default allBlogReducer

