import { combineReducers } from "@reduxjs/toolkit";

import ApiReducers from "./api";
import app from "./app";

const rootReducer = combineReducers({
  app,
  ...ApiReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
