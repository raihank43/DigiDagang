"use client";

import ProductCard from "@/components/ProductCard";
import { MyResponse, Product } from "../type";
import SearchBar from "@/components/Search";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";

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
        const result = (await res.json()) as MyResponse<Product[]>;
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="mt-0 mx-auto px-4 bg-white rounded-lg">
        <div className="flex flex-row justify-between items-center p-8">
          <h1 className="text-2xl font-bold text-center my-6">
            All Products
          </h1>

          <div className=" border-solid border-black duration-500 ease-in-out hover:grow">
            <SearchBar />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Pagination />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6 p-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center my-8">
          <Pagination />
        </div>
      </div>
    </>
  );
}
