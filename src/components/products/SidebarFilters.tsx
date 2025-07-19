import { useProductStore } from "../../features/products/useProducStore";
import { categories } from "../../utils/const";
import FilterDropDown from "./FilterDropDown";

function SidebarFilters() {
  const setCategory = useProductStore((s) => s.setCategory);
  return (
    <>
      <FilterDropDown
        onSelect={setCategory}
        title="PRODUCT CATEGORIES"
        options={categories}
      />
      <FilterDropDown
        title="FILTER BY PRICE"
        options={["$0 - $100", "$100 - $200", "$200 - $300"]}
      />
    </>
  );
}

export default SidebarFilters;
