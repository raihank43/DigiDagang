import ProductCard from "@/components/ProductCard";
import { Product } from "@/app/type";

type ProductDetailProps = {
  params: {
    id: string;
  };
};
export default function ProductDetailPage({ params }: ProductDetailProps) {
  console.log(params, "<<<<<<params") //{ id: '1' } <<<<<< params
  return (
    <main className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-10">
      <h1>Product Detail page, ID: {params.id}</h1>
    </main>
  );
}
