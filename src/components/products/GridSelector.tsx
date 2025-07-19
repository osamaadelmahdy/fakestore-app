import React from "react";
import {
  TfiLayoutGrid2,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4,
} from "react-icons/tfi";
import { useProductStore } from "../../features/products/useProducStore";

const GridSelector: React.FC = () => {
  const columns = useProductStore((s) => s.columns);
  const setColumns = useProductStore((s) => s.setColumns);
  return (
    <div className="flex gap-2">
      <TfiLayoutGrid2
        size={18}
        className={
          columns === 2 ? "text-black" : "text-gray-400 cursor-pointer"
        }
        onClick={() => setColumns(2)}
      />
      <TfiLayoutGrid3Alt
        size={18}
        className={
          columns === 3 ? "text-black" : "text-gray-400 cursor-pointer"
        }
        onClick={() => setColumns(3)}
      />
      <TfiLayoutGrid4
        size={18}
        className={
          columns === 4 ? "text-black" : "text-gray-400 cursor-pointer"
        }
        onClick={() => setColumns(4)}
      />
    </div>
  );
};

export default GridSelector;
