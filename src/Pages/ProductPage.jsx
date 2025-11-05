import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import useFetch from "../Hooks/useFetch";

const ProductList = () => {
  const [data] = useFetch("https://dummyjson.com/products");

  return (
    <div className="product-list">
      {data?.products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
