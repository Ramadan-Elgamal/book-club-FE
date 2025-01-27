import { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query/react";

export interface SerializedError {
  name?: string;
  data: {
    message?: string;
  };
  status: number;
}

export type BaseQueryType = BaseQueryFn<
  string | FetchArgs,
  unknown,
  SerializedError,
  object
>;

export interface ApiAction {
  meta: {
    arg: {
      endpointName: string;
      type: string;
    };
  };
  type: string;
  payload?: {
    data?: unknown & {
      message?: string;
    };
    error?: unknown;
  };
}
