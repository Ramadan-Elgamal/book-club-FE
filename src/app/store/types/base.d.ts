import { BaseGetAllQuery } from "./base/base.d";
export type BaseGetAllResponse<T> = {
  data: T[];
  page: number;
  total: number;
};

export type BaseGetAllQuery = {
  skip?: number;
  limit?: number;
  sort?: string;
};
