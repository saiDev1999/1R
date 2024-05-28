import { legacy_createStore } from "redux";
import { singleReducer } from "./singleReducer";

export const reduxStore = legacy_createStore(singleReducer);
