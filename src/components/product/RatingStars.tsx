import React from "react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const RatingStars: React.FC<{ rate: number; count: number }> = ({
  rate,
  count,
}) => {
  const fullStars = Math.floor(rate);
  const halfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex text-yellow-500">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
        {halfStar && <FaStarHalfStroke />}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
      </div>
      <span className="text-sm text-gray-500">({count} reviews)</span>
    </div>
  );
};

export default RatingStars;
