import { combineReducers } from "redux";
import postReducer from './reducers/postReducer'

const rootReducer = combineReducers({
   allProducts: postReducer
  });
  
  export default rootReducer;
