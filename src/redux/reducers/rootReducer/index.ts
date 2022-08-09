import { combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "../../slices/charactersSlice";
import paginationInfoReducer from "../../slices/paginationInfoSlice";
const rootReducer = combineReducers({
  characters: charactersReducer,
  paginationInfo: paginationInfoReducer,
});
export default rootReducer;
