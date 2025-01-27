import { PaymentMethod } from "~/app/pages/admin/data/interface";
import { Category } from "./categories";
import { Merchant } from "./merchants";
import { Wallet, WalletTransaction } from "./wallets";
import { Product } from "./product";
import { User } from "./users";

export interface IAdmin
  extends Category,
    Merchant,
    PaymentMethod,
    Product,
    Wallet,
    WalletTransaction,
    User {}
