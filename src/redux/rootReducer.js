import { combineReducers } from "redux";
import allBlogReducer from "./reducers/blogs/allBlogReducer";
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
   allBlog: allBlogReducer,
   globalData: globalReducer,
  });
  
  export default rootReducer;
