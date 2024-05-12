"use client";

import { MyResponse } from "@/app/type";
import { toast } from "react-toastify";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export default function WishlistProductDetailButton({
  productId,
}: {
  productId: string;
}) {
  const handleAddWishlist = async (productId: string) => {
    // logika untuk menghapus produk dari wishlist
    console.log(`Product ${productId} added to wishlist`);
    try {
      const res = await fetch(baseURL + `wishlists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productId),
      });
      if (!res.ok) {
        toast.error("Silahkan login dulu sebelum akses fitur ini!");
        throw new Error("Invalid token");
      }

      const result = (await res.json()) as MyResponse;
      toast.success(result.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={() => handleAddWishlist(productId)}
      type="button"
      className="h-14 px-6 py-2 font-semibold rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center"
      // onClick={handleWishlistClick}
    >
      {/* Icon Heart */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {/* {isInWishlist? "Remove from Wishlist" : "Add to Wishlist"} */}
      Add to Wishlist
    </button>
  );
}
