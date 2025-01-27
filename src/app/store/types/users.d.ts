import { BaseGetAllQuery, BaseGetAllResponse } from "./base";

export interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
  country: string;
  dob: string;
  resetPasswordAttempts: number;
  status: string;
  removed: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  ipAddress: string;
  lastLogin: string;
}

export type UsersResponse = BaseGetAllResponse<User>;

export type UsersQuery = BaseGetAllQuery & Partial<User>;
