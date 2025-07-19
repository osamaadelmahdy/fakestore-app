import { create } from "zustand";
import type { CartItem } from "./types";
import type { Product } from "../products/types";

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) => {
    const items = get().items;
    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      set({
        items: items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] });
    }
  },
  removeItem: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),
  updateQuantity: (id, quantity) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    }),
  clearCart: () => set({ items: [] }),
  getTotal: () =>
    get().items.reduce((total, item) => total + item.quantity * item.price, 0),
}));
