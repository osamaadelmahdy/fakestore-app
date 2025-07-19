import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/products";
import Loader from "../Loader";
import ProductCard from "./ProductCard";
import Error from "../Error";
import { useProductStore } from "../../features/products/useProducStore";

function ProductGrid() {
  const { limit, category, columns } = useProductStore();
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["products", category, limit],
    queryFn: () => fetchProducts(category, limit),
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error title="products" refetch={refetch} />;
  return (
    <div
      className={`grid grid-cols-${columns ?? 1}} sm:grid-cols-${
        columns ?? 2
      } md:grid-cols-${columns ?? 3} gap-10`}
    >
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
