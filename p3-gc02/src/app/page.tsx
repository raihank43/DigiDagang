import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  const products = Array(10).fill({
    // Replace this with actual product data
    name: "Product Name",
    price: "Rp100.000",
    image: "/path/to/image.jpg",
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">

        <header className="bg-indigo-600 text-white p-12 text-center">
          <h2 className="text-4xl mb-4">Selamat datang di E-Shop!</h2>
          <p>Temukan berbagai produk menarik di sini.</p>
        </header>

        <main className="p-6 space-y-8">
          <section>
            <h3 className="text-2xl font-bold">Produk Unggulan</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {products.map((product, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h4 className="mt-4 font-bold">{product.name}</h4>
                  <p className="mt-2">{product.price}</p>
                </div>
              ))}
            </div>
            <div className="text-right mt-4">
              <a href="/products" className="text-indigo-600 hover:underline">
                Lihat semua
              </a>
            </div>
          </section>
        </main>

        <footer className="bg-white p-6 shadow mt-8">
          <p>© 2024 E-Shop. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
