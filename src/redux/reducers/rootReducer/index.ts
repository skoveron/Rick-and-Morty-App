import { combineReducers } from "@reduxjs/toolkit";
import charactersReducer from "../../slices/charactersSlice";
import userReducer from "../../slices/userSlice";
const rootReducer = combineReducers({
  characters: charactersReducer,
  user: userReducer,
});
export default rootReducer;
