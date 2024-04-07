"use client";

import ProductCard from "@/components/ProductCard";
import { MyResponse, Product } from "../type";
import SearchBar from "@/components/Search";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingComponent from "@/components/LoadingComponent";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [stateHasMore, setStatehasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const fetchSearchProducts = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/search-products?search=" + searchTerm
      );

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

  const handleSearchSubmit = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // Handle the search term as you wish
    console.log(`User searched for ${searchTerm}`);
    await fetchSearchProducts();
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/products" + "?page=" + (currentPage + 1)
      );

      if (!res.ok) {
        // this will activate the closest `error.js` error boundary
        throw new Error("Failed to fetch data");
      }
      const result = (await res.json()) as MyResponse<Product[]>;

      const hasMore = result.hasMore as boolean;
      const dataCurrentPage = result.currentPage as number;

      setCurrentPage(dataCurrentPage);
      setStatehasMore(hasMore);

      setProducts(products.concat(result.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchSearchProducts();
  }, [searchTerm]);
  return (
    <>
      <div className="mt-0 mx-auto px-4 bg-white rounded-lg pt-16">
        <div className="flex flex-row justify-between items-center p-8">
          <h1 className="text-2xl font-bold text-center my-6">All Products</h1>

          <div className=" border-solid border-black duration-500 ease-in-out hover:grow">
            <SearchBar
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Pagination />
        </div>

        {/* Products Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6 p-6"> */}
        <InfiniteScroll
          dataLength={products.length} //This is important field to render the next data
          next={fetchProducts}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6 p-6 overflow-auto"
          hasMore={stateHasMore}
          loader={
            <div className="col-span-full h-screen flex justify-center items-center bg-white">
              <img src="https://res.cloudinary.com/dkrchzi4b/image/upload/v1712121253/qvrdhaa8h5hrnlh7jhd1.gif"></img>
            </div>
          }
          endMessage={
            <p className="col-span-full" style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </InfiniteScroll>
        {/* </div> */}

        {/* Pagination */}
        <div className="flex justify-center items-center my-8">
          <Pagination />
        </div>
      </div>
    </>
  );
}
