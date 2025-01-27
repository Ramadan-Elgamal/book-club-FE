import { BaseGetAllQuery, BaseGetAllResponse } from "./base";

export interface Wallet {
  _id: string;
  removed: boolean;
  balance: number;
  currency: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface WalletTransaction {
  _id: string;
  removed: boolean;
  merchant: string | { name: string; id: string };
  balance: number;
  currency: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  amount: number;
  currentBalance: number;
  description: string;
  performedBy: string;
  reference: string | null;
  status: string;
  type: string;
  wallet: string;
}

export type WalletTransactionResponse = BaseGetAllResponse<WalletTransaction>;

export type WalletTransactionQuery = BaseGetAllQuery &
  Partial<WalletTransaction>;

export type WalletResponse = BaseGetAllResponse<Wallet>;

export type WalletQuery = BaseGetAllQuery & Partial<Wallet>;
