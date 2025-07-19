import { type FC } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { categoryMap } from "../../utils/const";
import { useProductStore } from "../../features/products/useProducStore";

const CategoryHeader: FC = () => {
  const category = useProductStore((s) => s.category);
  const title = category ? categoryMap[category] ?? category : "All Products";

  return (
    <div className="w-full bg-black text-white py-3 font-semibold flex items-center justify-center gap-2">
      <FaArrowLeftLong />
      {title.toUpperCase()}
    </div>
  );
};

export default CategoryHeader;
