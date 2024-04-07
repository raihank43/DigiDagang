"use client";
import { useRouter } from "next/navigation";
import { Product } from "../app/type";
import Link from "next/link";
import formatRupiah from "@/app/utils/toRupiahFormat";
import WishlistButtonComponent from "./WishlistButtonComponent";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  return (
    <div className="flex w-full max-w-sm flex-col rounded-xl bg-white shadow-lg duration-500 ease-in-out  transition-transform hover:scale-110 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-xl">
        <img src={product.thumbnail} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        <WishlistButtonComponent productId={product._id} />
        <div className="bg-green-700 rounded-b-lg p-3 flex flex-row items-center gap-2">
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />{" "}
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          <p className="text-white font-bold">{formatRupiah(product.price)}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {product.name}
          </h5>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="-mt-0.5 h-5 w-5 text-yellow-700"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            5.0
          </p>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased italic">
          {product.excerpt}
        </p>
      </div>
      <div className="mt-auto">
        {/* <div className="flex flex-row gap-2 p-3 flex-wrap">
          {product.tags.map((el) => {
            return (
              <>
                <svg
                  className="text-orange-600"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4" />{" "}
                  <circle cx="9" cy="9" r="2" />
                </svg>
                <p className="">{el}</p>
              </>
            );
          })}
        </div> */}

        <Link
          href={"/products/" + product.slug}
          className="block w-full select-none rounded-b-lg bg-blue-800 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-blue-400 hover:text-blue-950"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}
