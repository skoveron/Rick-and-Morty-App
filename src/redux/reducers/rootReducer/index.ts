import { combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "../../slices/charactersSlice";

const rootReducer = combineReducers({
  characters: charactersReducer,
});
export default rootReducer;
