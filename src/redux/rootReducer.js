import { combineReducers } from "redux";
import allBlogReducer from "./reducers/blogs/allBlogReducer";
import commentsReducer from "./reducers/blogs/commentsReducer";
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
   allBlog: allBlogReducer,
   globalData: globalReducer,
   comments: commentsReducer
  });
  
  export default rootReducer;
