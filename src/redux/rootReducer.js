import { combineReducers } from "redux";
import postReducer from './reducers/postReducer'
import globalReducer from "./reducers/globalReducer";

const rootReducer = combineReducers({
   allProducts: postReducer,
   globalData: globalReducer,

  });
  
  export default rootReducer;
