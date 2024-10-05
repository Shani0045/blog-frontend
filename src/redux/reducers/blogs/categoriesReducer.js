// import postType from '../actionTypes/postType'

import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAIL } from "../../actionTypes/blogs/CategoriesType";

const initialState = {
      loading: false,
      error: null,
      data: {}
  };

const categoriesReducer = (state = initialState, action) => {

    switch (action.type) {
      case CATEGORIES_REQUEST:
        return {
          ...state,
          loading : true
        };
  
      case CATEGORIES_SUCCESS:
        return {
          ...state,
            loading: false,
            error: null,
            data: action.payload
        };
  
      case CATEGORIES_FAIL:
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

export default categoriesReducer

