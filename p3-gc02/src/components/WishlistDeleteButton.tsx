"use client";

import { ObjectId } from "mongodb";

interface DeleteButtonProps {
  handleDelete: (productId: ObjectId) => void;
  productId: ObjectId;
}

export default function WishlistDeleteButton({
  handleDelete,
  productId,
}: DeleteButtonProps) {
  return (
    <button
      //   onClick={handleDelete}
      className="absolute top-0 left-0 z-10 m-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white transition duration-300 ease-in-out hover:bg-red-700 hover:scale-110 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
