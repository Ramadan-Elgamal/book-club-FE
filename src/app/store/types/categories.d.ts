import { CategoryType } from "~/base/enums";
import { BaseGetAllQuery, BaseGetAllResponse } from "./base";
import { MerchantType } from "~/app/pages/merchants/enum";

export interface Parent {
  _id?: string;
  title?: string;
  icon?: string;
}
export interface Category {
  _id?: string;
  title?: string;
  description?: string;
  slug?: string;
  icon?: string;
  isVisible?: boolean;
  isFeatured?: boolean;
  allowedCountries?: string[];
  blockedCountries?: string[];
  removed: boolean;
  parent?: Parent | string | null;
  type?: CategoryType | MerchantType;
}

export type CategoriesResponse = BaseGetAllResponse<Category>;

export type CategoriesQuery = BaseGetAllQuery & Partial<Category>;
