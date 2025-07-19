import { create } from "zustand";

interface ProductState {
  limit: number;
  category: string | null;
  columns: number | null;
  setLimit: (limit: number) => void;
  setCategory: (category: string | null) => void;
  setColumns: (columns: number | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  limit: 50,
  category: null,
  columns: null,
  setLimit: (limit) => set({ limit }),
  setCategory: (category) => set({ category }),
  setColumns: (columns) => set({ columns }),
}));
