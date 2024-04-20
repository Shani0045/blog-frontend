import { combineReducers } from "redux";
import blogDetailsReducer from './reducers/blogDetailsReducer'
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
   blogDetails: blogDetailsReducer,
   globalData: globalReducer,

  });
  
  export default rootReducer;
