import { combineReducers } from "redux";
import blogDetailsReducer from './reducers/blogs/blogDetailsReducer'
import allBlogReducer from "./reducers/blogs/allBlogReducer";
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
   blogDetails: blogDetailsReducer,
   allBlog: allBlogReducer,
   globalData: globalReducer,

  });
  
  export default rootReducer;
