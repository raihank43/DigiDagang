import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function Home() {
  const products = Array(10).fill({
    // Replace this with actual product data
    name: "Product Name",
    price: "Rp100.000",
    image:
      "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2022/6/2/201de609-0cb0-4210-b6fc-a559b588168c.png",
  });

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Carousel />
        <header className="bg-indigo-600 text-white p-12 text-center border rounded-t-lg">
          <h2 className="text-4xl mb-4">Selamat datang di DigiDagang!</h2>
          <p>Temukan berbagai produk menarik di sini.</p>
        </header>
        <main className="p-6 space-y-8">
          <section>
            <h3 className="text-2xl font-bold text-blue-800">
              Produk Unggulan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {products.map((el) => {
                return (
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                      src={el.image}
                      alt="nama produk"
                      className="w-full h-48 object-cover rounded"
                    />
                    <h4 className="mt-4 font-bold text-black">{el.name}</h4>
                    <p className="mt-2 text-green-800">Rp.{el.price}</p>

                    <Link
                      href=""
                      className="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out round"
                    >
                      See Detail
                    </Link>
                  </div>
                );
              })}
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
