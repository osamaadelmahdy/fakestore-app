import React from "react";
import { useCartStore } from "./useCartStore";
import { formatPrice } from "../../utils/formatPrice";

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>
                  {formatPrice(item.price)} x {item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                  className="w-16 border rounded px-2 py-1"
                />
                <button
                  className="text-red-600"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="font-bold text-lg mt-4">
            Total: {formatPrice(getTotal())}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
