import { Middleware } from "@reduxjs/toolkit";
import { authApi } from "./auth/authApi";

const middlewares: Middleware[] = [authApi.middleware];

export default middlewares;
