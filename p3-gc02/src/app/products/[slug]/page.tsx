import ProductCard from "@/components/ProductCard";
import { MyResponse, Product } from "@/app/type";
import Script from "next/script";
import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import formatRupiah from "@/app/utils/toRupiahFormat";
import WishlistProductDetailButton from "@/components/WishlistProductDetailButton";
import type { Metadata } from 'next'
const baseURL = process.env.NEXT_PUBLIC_BASE_URL
 


type ProductDetailProps = {
  params: {
    slug: string;
  };
};

type Params = {
  slug: string;
};


async function getDataBySlug(slug: string) {
  const res = await fetch(baseURL + "products/" + slug);
  if (!res.ok) {
    console.log("masukkk");
    throw new Error("Something went wrong!");
  }
  const result = (await res.json()) as MyResponse<Product>;

  return result;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const res = await fetch(baseURL + "products/" + params.slug);
  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  const result = (await res.json()) as MyResponse<Product>;

  return {
    title: `DigiDagang - ${result.data.name}`,
    description: result.data.description,
    // Anda bisa menambahkan metadata lainnya di sini
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailProps) {
  const product = await getDataBySlug(params.slug);

  return (
    <>
      <div className="bg-white h-screen pt-10">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <a href="#" className="hover:underline hover:text-gray-600">
              Electronics
            </a>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>Headphones</span>
          </div>
        </div>
        {/* ./ Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak="">
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  {/* <div
                    x-show=""
                    className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${product.data.images[0]})`,
                    }}
                  >
                    <span className="text-5xl">1</span>
                  </div> */}

                  <ProductDetailCarousel images={product.data.images} />
                </div>
                <div className="flex -mx-2 mb-4">
                  <template x-for="i in 4" />
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {product.data.name}{" "}
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p>
              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1"></span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {formatRupiah(product.data.price)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>
              <p className="text-gray-500">{product.data.description}</p>
              <div className="flex flex-wrap my-4 gap-3">
                {product.data.tags.map((el,index) => {
                  return (
                    <div key={index} className="bg-orange-400 p-2 rounded-e-badge text-xs border-none shadow-lg">
                      <p className="font-bold">{el}</p>
                    </div>
                  );
                })}
              </div>
              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
                <WishlistProductDetailButton productId={product.data._id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
