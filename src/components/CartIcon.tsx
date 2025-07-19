import React from "react";
import { useCartStore } from "../features/cart/useCartStore";
import { FaShoppingCart } from "react-icons/fa";
import { formatPrice } from "../utils/formatPrice";

const CartIcon: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Cart Button */}
        <div className="bg-white border shadow-2xl   rounded-full p-4 hover:scale-105 transition duration-300 cursor-pointer">
          <FaShoppingCart size={24} className="text-black" />
          {itemCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[11px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </div>

        {/* Tooltip panel */}
        {itemCount > 0 && (
          <div className="absolute right-0 bottom-16 bg-white shadow-lg border rounded-md p-3 text-sm w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
            <p className="font-medium mb-1">Items: {itemCount}</p>
            <p className="font-medium">Total: {formatPrice(totalPrice)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartIcon;
