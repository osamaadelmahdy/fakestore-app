import React from "react";
import { categoryMap } from "../../utils/const";
import { useProductStore } from "../../features/products/useProducStore";

const Breadcrumb: React.FC = () => {
  const category = useProductStore((s) => s.category);
  const label = category ? categoryMap[category] ?? category : "All";

  return (
    <div className="flex items-center gap-6 flex-wrap">
      <div className="text-gray-500">
        Home / <span className="text-black font-semibold">{label}</span>
      </div>
    </div>
  );
};

export default Breadcrumb;
