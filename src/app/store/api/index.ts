import { authApi } from "./auth/authApi";

export default {
  [authApi.reducerPath]: authApi.reducer,
};
