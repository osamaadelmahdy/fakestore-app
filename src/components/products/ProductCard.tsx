import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../features/cart/useCartStore";
import { formatPrice } from "../../utils/formatPrice";
import type { Product } from "../../features/products/types";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group relative rounded-lg p-4 hover:shadow-xl transition duration-300">
      <Link to={`/product/${product.id}`} className="block text-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-56 w-full object-contain mb-4 transition-transform duration-300 group-hover:scale-105"
        />

        <div className="space-y-2">
          <h2 className="text-sm font-medium text-gray-800 line-clamp-2">
            {product.title}
          </h2>
          <p className="text-xs uppercase tracking-wide text-gray-400">
            {product.category}
          </p>
          <p className="text-base font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className="absolute cursor-pointer inset-x-4 bottom-1/3 opacity-0 group-hover:opacity-100 bg-black text-white py-2 rounded text-sm transition-opacity duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
