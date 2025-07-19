import React from "react";
import MainNavigationBar from "../../components/products/MainNavigationBar";

import FilterDropDown from "../../components/products/FilterDropDown";
import ProductGrid from "../../components/products/ProductGrid";
import SidebarFilters from "../../components/products/SidebarFilters";
import ShowLimitSelector from "../../components/products/ShowLimitSelector";
import CategoryHeader from "../../components/products/CategoryHeader";
import Breadcrumb from "../../components/products/Breadcrumb";
import GridSelector from "../../components/products/GridSelector";

const ProductList: React.FC = () => {
  return (
    <div className="px-6 py-4 gap-4 flex flex-col w-screen h-screen ">
      <MainNavigationBar />
      <CategoryHeader />
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-sm">
        {/* Left: Categories + Breadcrumb */}
        <Breadcrumb />

        {/* Right: Show, View Options, Sort */}
        <div className="flex items-center gap-4 flex-wrap mt-4 md:mt-0">
          <ShowLimitSelector />

          <GridSelector />
          <FilterDropDown
            title="Sort By Latest"
            options={["Popularity", "Price: Low to High", "Price: High to Low"]}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Product Section */}
        <div className="flex flex-col w-full lg:w-1/5 gap-4">
          <SidebarFilters />
        </div>

        <div className="w-full lg:w-4/5">
          {/* Product Grid */}
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
