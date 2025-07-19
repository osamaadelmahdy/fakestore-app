import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../api/products";
import { useCartStore } from "../cart/useCartStore";
import { formatPrice } from "../../utils/formatPrice";
import { FaGooglePay } from "react-icons/fa6";
import FullScreenLoader from "../../components/FullScreenLoaderWrapper";
import RatingStars from "../../components/product/RatingStars";
import PaymentIcons from "../../components/product/PaymentIcons";
import Thumbnails from "../../components/product/Thumbnails";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const addItem = useCartStore((state) => state.addItem);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(Number(id)),
    enabled: !!id,
  });

  if (isLoading) return <FullScreenLoader />;
  if (isError || !data)
    return <p className="text-red-500">Product not found.</p>;

  return (
    <div className="p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Thumbnails */}
        <Thumbnails image={data.image} />

        {/* Main Image */}
        <div className="text-center md:col-span-5">
          <img
            src={data.image}
            alt={data.title}
            className="h-[400px] object-contain mx-auto"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-6 space-y-5">
          <div className="flex">
            <div className="flex bg-black h-16 p-2 items-start justify-start">
              <p className="uppercase text-white text-xs font-semibold tracking-widest">
                MOON BOOT
              </p>
            </div>
          </div>

          <h1 className="text-2xl font-bold capitalize">{data.title}</h1>

          {/* Rating */}
          <RatingStars rate={data.rating.rate} count={data.rating.count} />
          <p className="text-xl font-semibold">{formatPrice(data.price)}</p>

          {/* Description */}
          <div>
            <h2 className="text-md font-semibold mb-1">Description</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="text-sm text-gray-500">Size Guide</div>

          <select className="w-full border p-2 rounded text-sm">
            <option>Choose an option</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>

          <button
            className="w-full bg-black text-white py-3 rounded text-sm"
            onClick={() => addItem(data)}
          >
            Add To Cart
          </button>

          <button className="w-full bg-gray-200 text-black py-3 rounded flex items-center justify-center gap-2 text-sm">
            <FaGooglePay className="h-5" size={24} />
            Pay with <span className="font-semibold">G Pay</span>
          </button>

          <PaymentIcons />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
