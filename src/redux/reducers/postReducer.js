// import postType from '../actionTypes/postType'

import { POST_FAIL, POST_REQUEST, POST_SUCCESS } from "../actionTypes/postType";

const initialState = {
      loading: false,
      error: null,
      data: {}
  };

const postReducer = (state = initialState, action) => {

    switch (action.type) {
      case POST_REQUEST:
        return {
          ...state,
          loading : true
        };
  
      case POST_SUCCESS:
        return {
          ...state,
            loading: false,
            error: null,
            data: action.payload
        };
  
      case POST_FAIL:
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

export default postReducer

