"use client";
import React, { useEffect, useState } from "react";
import { MyResponse, WishlistType } from "../type";
import { cookies } from "next/headers";
import { ObjectId } from "mongodb";
import WishlistItem from "@/components/WishlistItem";
import { toast } from "react-toastify";

export default async function Wishlist() {
  // const products = [
  //   // product hardcode
  //   {
  //     id: "1",
  //     name: "Product 1",
  //     detail: "Detail for Product 1",
  //     price: "$100",
  //     image: "https://loremflickr.com/400/400/nature",
  //     quantity: 2, // Kuantitas ditambahkan
  //   },
  //   {
  //     id: "2",
  //     name: "Product 2",
  //     detail: "Detail for Product 2",
  //     price: "$200",
  //     image:
  //       "https://loremflickr.com/cache/resized/defaultImage.small_400_400_nofilter.jpg",
  //     quantity: 1, // Kuantitas ditambahkan
  //   },
  //   // tambahkan produk lainnya di sini
  // ];

  const [wishlistItems, setWishlistItems] = useState<WishlistType[]>([]);

  const fetchWishlistData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/wishlists");

      if (!res.ok) {
        throw new Error("Failed to fetch data.");
      }

      const result = (await res.json()) as MyResponse<WishlistType[]>;

      setWishlistItems(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (wishlistId: ObjectId) => {
    // logika untuk menghapus produk dari wishlist
    console.log(`Product ${wishlistId} deleted`);

    console.log(wishlistId, "<<<<<<<<<<<<<<");
    try {
      const res = await fetch(`http://localhost:3000/api/wishlists`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistId),
      });
      const result = (await res.json()) as MyResponse;

      console.log(result);

      fetchWishlistData();
      toast.success(result.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSeeDetail = (productDetail: string) => {
    // logika untuk melihat detail produk
    console.log(productDetail);
  };

  useEffect(() => {
    fetchWishlistData();
  }, []);

  return (
    <div className="flex h-fit flex-col pt-16 mt-0  mx-auto px-4">
      <div className="bg-gray-50 text-black flex justify-center items-center p-10 font-bold text-3xl">
        <h1>My Wishlist</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
        {wishlistItems.length !== 0 ? (
          wishlistItems.map((items, index) => (
            <WishlistItem
              product={items.Product}
              key={index}
              handleDelete={handleDelete}
              wishlistId={items._id}
            />
          ))
        ) : (
          <div className="flex h-screen w-screen self-center justify-center items-center max-w-screen-lg">
            <h1>Belum ada wishlist, tambahkan produk ke wishlistmu!</h1>
          </div>
        )}
      </div>
    </div>
  );
}
