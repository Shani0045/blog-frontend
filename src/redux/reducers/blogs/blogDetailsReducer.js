// import postType from '../actionTypes/postType'

import { BLOG_DETAILS_REQUEST, BLOG_DETAILS_SUCCESS, BLOG_DETAILS_FAIL } from "../../actionTypes/blogs/blogDetailsType";

const initialState = {
      loading: false,
      error: null,
      data: {}
  };

const blogDetailsReducer = (state = initialState, action) => {

    switch (action.type) {
      case BLOG_DETAILS_REQUEST:
        return {
          ...state,
          loading : true
        };
  
      case BLOG_DETAILS_SUCCESS:
        return {
          ...state,
            loading: false,
            error: null,
            data: action.payload
        };
  
      case BLOG_DETAILS_FAIL:
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

export default blogDetailsReducer

