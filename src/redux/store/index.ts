import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import rootReducer from "../reducers/rootReducer";

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
