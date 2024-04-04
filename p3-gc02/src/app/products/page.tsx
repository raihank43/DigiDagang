import ProductCard from "@/components/ProductCard";
import { Product } from "../type";
import SearchBar from "@/components/Search";
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
    <main className="container">
      <div>
        <SearchBar />
      </div>

      <div className="container justify-center">
        <h1>Product page</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-10 items-center p-10">
        {products.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        })}
      </div>
    </main>
  );
}
