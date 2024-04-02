"use client";
import { useRouter } from "next/navigation";
import { Product } from "../app/type";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={product.images[0]}
        alt="nama produk"
        className="w-full h-48 object-cover rounded"
      />
      <h4 className="mt-4 font-bold text-black">{product.name}</h4>
      <p className="mt-2 text-green-800">Rp.{product.price}</p>

      <Link
        href={"/products/" + product.id}
        className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out round"
      >
        See Detail
      </Link>
    </div>
  );
}
