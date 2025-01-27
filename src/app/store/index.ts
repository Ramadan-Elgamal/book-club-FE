import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useDispatch } from "react-redux";
import { createLogger } from "redux-logger";
import queryMiddlewares from "./api/queryMiddlewares";
import { ApiMiddleware } from "base/middlewares";

if (process.env.NODE_ENV === "development" && import.meta.hot) {
  import.meta.hot.accept("./rootReducer", () => {
    store.replaceReducer(rootReducer);
  });
}

const middlewares = [...queryMiddlewares];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: (_getState, _action, logEntry) => !logEntry?.error,
  });
  middlewares.push(logger);
}

middlewares.push(ApiMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
