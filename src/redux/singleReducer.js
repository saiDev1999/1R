import { combineReducers } from "redux";
import profileReducer from "./profile/reducer";
import { reducerBookFunction } from "./reducer";
import { productReducer } from "./products/reducer";

export const singleReducer = combineReducers({
  profile: profileReducer,
  books: reducerBookFunction,
  products: productReducer,
});
