import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import FeaturedCards from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import { MyResponse, Product } from "./type";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

async function fetchFeaturedProducts() {
  const res = await fetch(baseURL + "featuredProducts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const result = (await res.json()) as MyResponse<Product[]>;

  return result.data;
}

export default async function Home() {
  const products = await fetchFeaturedProducts();
  return (
    <>
      <div className="min-h-screen bg-white">
        <Carousel />
        <header className="text-white p-12 text-center rounded-t-3xl bg-gradient-to-b from-blue-500 to-blue-400">
          <div className="mt-5">
            <h2 className="text-4xl mb-4">
              Selamat datang di{" "}
              <span className=" italic font-poppins-black text-indigo-500">
                Digi{" "}
              </span>
              <span className=" font-extrabold font-poppins-bold text-orange-600">
                Dagang
              </span>
            </h2>
            <p>Temukan berbagai produk menarik di sini.</p>
          </div>
        </header>
        <main className="p-6 space-y-8 mb-10">
          <section>
            <h3 className="text-2xl font-bold text-blue-800 text-center"></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"></div>
            {/* Produk Unggulan */}
            <section className=" py-8">
              <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                  <a
                    className="uppercase tracking-wide no-underline hover:no-underline font-bold text-black text-xl "
                    href="#"
                  >
                    Produk Unggulan
                  </a>
                  <div className="flex items-center" id="store-nav-content">
                    <Link
                      href="/products"
                      className="text-white hover:underline bg-indigo-900 p-3 rounded-badge btn"
                    >
                      Lihat semua
                    </Link>
                  </div>
                </div>
              </nav>

              {/* Featured Products */}
              <div className="container mx-auto flex overflow-x-scroll space-x-0 whitespace-nowrap pt-4 pb-12">
                {products.map((el, index) => {
                  return <FeaturedCards key={index} product={el} />;
                })}
              </div>
            </section>
            <div className="text-right mt-4">
         
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
