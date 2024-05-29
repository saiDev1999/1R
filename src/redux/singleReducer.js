import { combineReducers } from "redux";
import profileReducer from "./profile/reducer";
import { reducerBookFunction } from "./reducer";
import { productReducer } from "./products/reducer";
import { cartReducer } from "./cart/reducer";

export const singleReducer = combineReducers({
  profile: profileReducer,
  books: reducerBookFunction,
  products: productReducer,
  cart: cartReducer,
});
