import axios from "axios";
import type { Product } from "../features/products/types";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (
  category: string | null,
  limit: number | null
): Promise<Product[]> => {
  if (category) return fetchProductByCategory(category, limit);
  const url = limit
    ? `${BASE_URL}/products?limit=${limit}`
    : `${BASE_URL}/products`;
  const res = await axios.get(url);
  return res.data;
};

export const fetchProductByCategory = async (
  category: string,
  limit: number | null
): Promise<Product[]> => {
  const url = limit
    ? `${BASE_URL}/products/category/${category}?limit=${limit}`
    : `${BASE_URL}/products/category/${category}`;
  const res = await axios.get(url);
  return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await axios.get(`${BASE_URL}/products/${id}`);
  return res.data;
};
