import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import FeaturedCards from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import { MyResponse, Product } from "./type";

async function fetchFeaturedProducts() {
  const res = await fetch("http://localhost:3000/api/featuredProducts");

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const result = (await res.json()) as MyResponse<Product[]>;

  return result.data;
}

export default async function Home() {
  const products = await fetchFeaturedProducts()
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
                    <a
                      className="pl-3 inline-block no-underline hover:text-black"
                      href="#"
                    >
                      <svg
                        className="fill-current hover:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        color="black"
                      >
                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                      </svg>
                    </a>
                    <a
                      className="pl-3 inline-block no-underline hover:text-black"
                      href="#"
                    >
                      <svg
                        className="fill-current hover:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        color="black"
                      >
                        <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                      </svg>
                    </a>
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
              <a href="/products" className="text-indigo-600 hover:underline">
                Lihat semua
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
