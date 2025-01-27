import { MerchantType } from "~/app/pages/merchants/enum";
import { BaseGetAllQuery, BaseGetAllResponse } from "./base";
import { CategoryType } from "~/base/enums";

export interface RejectionReason {
  name?: string;
  registrationNumber?: string;
  registrationDate?: string;
  country?: string;
  registrationDocs?: string;
  taxDocs?: string;
  otherDocs?: string;
  website?: string;
  governmentId?: string;
  governmentIdDoc?: string;
}

export interface Merchant {
  _id: string;
  name?: string;
  registrationNumber?: string;
  registrationDate?: string;
  country?: string;
  registrationDocs?: string[];
  taxDocs?: string[];
  otherDocs?: string[];
  website?: string;
  governmentDocs?: string;
  governmentIdDoc?: string;
  removed: boolean;
  governmentId?: string;
  status?: string;
  type?: MerchantType | CategoryType;
  parent?: string | null;
  createdAt?: string;
  user?: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };
  rejectionReason?: RejectionReason;
}

export type MerchantsResponse = BaseGetAllResponse<Merchant>;

export type MerchantsQuery = BaseGetAllQuery & Partial<Merchant>;
