'use client'

export default function WishlistProductDetailButton() {
  return (
    <button
      type="button"
      className="h-14 px-6 py-2 font-semibold rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800"
      // onClick={handleWishlistClick}
    >
      {/* {isInWishlist? "Remove from Wishlist" : "Add to Wishlist"} */}
      Remove from Wishlist
    </button>
  );
}
