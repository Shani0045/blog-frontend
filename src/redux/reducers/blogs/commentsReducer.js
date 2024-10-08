// import postType from '../actionTypes/postType'

import { COMMENTS_REQUEST, COMMENTS_SUCCESS, COMMENTS_FAIL } from "../../actionTypes/blogs/commentsType";

const initialState = {
      loading: false,
      error: null,
      data: {}
  };

const commentsReducer = (state = initialState, action) => {

    switch (action.type) {
      case COMMENTS_REQUEST:
        return {
          ...state,
          loading : true
        };
  
      case COMMENTS_SUCCESS:
        return {
          ...state,
            loading: false,
            error: null,
            data: action.payload
        };
  
      case COMMENTS_FAIL:
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

export default commentsReducer

