import ProductCard from "@/components/ProductCard";
import { Product } from "../type";

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3001/products");

  if (!res.ok) {
    // this will activate the closest `error.js` error boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function ProductsPage() {
  const products = await fetchProducts();
//   console.log(products);
  return (
    <main className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-10">
      <h1>Product page</h1>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </main>
  );
}
