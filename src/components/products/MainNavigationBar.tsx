import { type FC } from "react";
import { categories } from "../../utils/const";
import { useProductStore } from "../../features/products/useProducStore";

const menuItems = ["All", ...categories];

const MainNavigationBar: FC = () => {
  const setCategory = useProductStore((s) => s.setCategory);
  return (
    <div className="text-xs font-semibold uppercase px-4 py-2 flex justify-center gap-6 flex-wrap">
      {menuItems.map((item) => (
        <div
          key={item}
          className="relative cursor-pointer hover:text-gray-700"
          onClick={() => setCategory(item === "All" ? null : item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MainNavigationBar;
