import type { Product } from "../products/types";

export interface CartItem extends Product {
  quantity: number;
}
