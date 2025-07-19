import React from "react";
import { useProductStore } from "../../features/products/useProducStore";

interface ShowLimitSelectorProps {
  options?: number[];
}

const ShowLimitSelector: React.FC<ShowLimitSelectorProps> = ({
  options = [50, 100, 150],
}) => {
  const limit = useProductStore((s) => s.limit);
  const setLimit = useProductStore((s) => s.setLimit);
  return (
    <div className="flex items-center gap-1">
      <span className="font-semibold">Show :</span>
      {options.map((val) => (
        <button
          key={val}
          onClick={() => setLimit(val)}
          className={`text-sm ${
            val === limit ? "font-bold text-black" : "text-gray-400"
          }`}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default ShowLimitSelector;
