import { combineReducers } from "redux";
import blogDetailsReducer from './reducers/blogs/blogDetailsReducer'
import allBlogReducer from "./reducers/blogs/allBlogReducer";
import categoriesReducer from "./reducers/blogs/categoriesReducer";
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
   blogDetails: blogDetailsReducer,
   allBlog: allBlogReducer,
   globalData: globalReducer,
   allCategories: categoriesReducer

  });
  
  export default rootReducer;
