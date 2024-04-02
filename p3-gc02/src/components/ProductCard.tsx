import { Product } from "../app/type";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <img
        src={product.images[0]}
        alt="nama produk"
        className="w-full h-48 object-cover rounded"
      />
      <h4 className="mt-4 font-bold text-neutral-950">{product.name}</h4>
      <p className="mt-2 text-lime-800">Rp.{product.price}</p>
    </div>
  );
}
