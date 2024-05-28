import { combineReducers } from "redux";
import profileReducer from "./profile/reducer";
import { reducerBookFunction } from "./reducer";

export const singleReducer = combineReducers({
  profile: profileReducer,
  books: reducerBookFunction,
});
