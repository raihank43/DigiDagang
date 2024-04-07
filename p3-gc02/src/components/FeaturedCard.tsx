"use client";

import { Product } from "@/app/type";
import Link from "next/link";
import WishlistButton from "./WishlistButton";

export default function FeaturedCards({ product }: { product: Product }) {
  return (
    <div className="xl:w-1/4 md:w-1/3 flex flex-shrink-0 items-center">
      <Link
        href={"/products/" + product.slug}
        className="group rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        <div className="relative">
          <img className="w-full h-64 object-cover" src={product.images[0]} />
          <WishlistButton />
        </div>
        <div className="p-4 bg-white">
          <p className="text-black text-lg font-bold transition-colors group-hover:text-indigo-500">
            {product.name}
          </p>
          <p className="pt-2 text-gray-900 transition-colors group-hover:text-indigo-500">
            {product.price}
          </p>
        </div>
        <div className="p-4 bg-gray-100 flex justify-between items-center">
          <p className="text-black transition-colors group-hover:text-indigo-500">
            Add to Cart
          </p>
        </div>
      </Link>
    </div>
  );
}
