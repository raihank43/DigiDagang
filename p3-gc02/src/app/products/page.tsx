"use client";

import ProductCard from "@/components/ProductCard";
import { MyResponse, Product } from "../type";
import SearchBar from "@/components/Search";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");

        if (!res.ok) {
          // this will activate the closest `error.js` error boundary
          throw new Error("Failed to fetch data");
        }
        const result = (await res.json()) as MyResponse<Product[]>
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="container">
      <div>
        <SearchBar />
      </div>

      <div className="container justify-center">
        <h1>Product page</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 items-center p-10">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </main>
  );
}
