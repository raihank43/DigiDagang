"use client";

import { MyResponse } from "@/app/type";
import { ObjectId } from "mongodb";
import { toast } from "react-toastify";

export default function WishlistButtonComponent({
  productId,
}: {
  productId: string;
}) {
  const handleAddWishlist = async (productId: string) => {
    // logika untuk menghapus produk dari wishlist
    console.log(`Product ${productId} added to wishlist`);
    try {
      const res = await fetch(`http://localhost:3000/api/wishlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productId),
      });
      if (!res.ok) {
        toast.error("Silahkan login dulu sebelum akses fitur ini!")
        throw new Error("Invalid token");
      }
      
      const result = (await res.json()) as MyResponse
      toast.success(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={() => handleAddWishlist(productId)}
      className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      </span>
    </button>
  );
}
