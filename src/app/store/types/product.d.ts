import { BaseGetAllQuery, BaseGetAllResponse } from "./base";
export interface Product {
  _id: string;
  title?: string;
  description?: string;
  richDescription?: string;
  parent?: {
    _id?:string;
    icon?:string;
    title?:string;
  } | string;
  slug?: string;
  sku?: string;
  redemption?: string;
  isInStock?: boolean;
  stockLimit?: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
  price?: string;
  buyLimit?: { min: string; max: string };
  image?: string;
  fees?: string;
  isVisable?: boolean;
  note: string;
  allowedCountries?: string[];
  blockedCountries?: string[];
  kind?: string;
  rangeLimit?: { min: string; max: string };
  createdAt?: string;
  rangeCurrency?: string;
  onSalePrice?: string;
  costPrice?: string;
  removed:boolean;
  inputsIf?: {
    inputsType?: string;
    placeholder?: string;
    inputsLabel?: string;
    isRequired?: boolean;
    _id: ?string;
  }[];
}
export type ProductsResponse = BaseGetAllResponse<Product>;

export type ProductsQuery = BaseGetAllQuery & Partial<Product>;
