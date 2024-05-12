import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "@/components/ProductCard";
import Carousel from "@/components/Carousel";
import Link from "next/link";
import Footer from "@/components/Footer";
import { MyResponse, Product } from "./type";
import formatRupiah from "./utils/toRupiahFormat";
import FeaturedCardBig from "@/components/FeaturedCardBig";
import FeaturedCardSmall from "@/components/FeaturedCardSmall";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
export const dynamic = "force-dynamic";

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
      <div className="min-h-screen bg-white pt-16">
        <Carousel />
        <header className="text-white p-12 text-center rounded-t-3xl bg-gradient-to-b from-blue-800 to-blue-700">
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
        <main className="p-6 space-y-8 mb-10 bg-gray-100">
          <section >
            <h3 className="text-2xl font-bold text-blue-800 text-center"></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"></div>
            {/* Produk Unggulan */}
            <section className=" py-8">
              <nav id="store" className="w-full z-30 top-0 px-6 py-1 pb-0">
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
                      className="text-white hover:underline bg-indigo-900 p-3 rounded-badge btn border-none text-sm"
                    >
                      Lihat semua
                    </Link>
                  </div>
                </div>
              </nav>

              {/* Featured Products */}

              <div className="flex min-h-screen items-center justify-center bg-neutral-800 rounded-2xl">
                <div className="mx-auto max-w-6xl px-6">
                  
                  <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
                    {products.map((el, index) => {
                      return index == 0 ? (
                        <FeaturedCardBig key={0} product={el} />
                      ) : (
                        <FeaturedCardSmall key={index + 1} product={el} />
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
            <div className="text-right mt-4"></div>
          </section>
        </main>
      </div>
    </>
  );
}
