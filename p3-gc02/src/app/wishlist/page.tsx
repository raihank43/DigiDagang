"use client";
import React from "react";

export default function Wishlist() {
  const products = [
    // product hardcode
    {
      id: 1,
      name: "Product 1",
      detail: "Detail for Product 1",
      price: "$100",
      image: "https://loremflickr.com/400/400/nature",
      quantity: 2, // Kuantitas ditambahkan
    },
    {
      id: 2,
      name: "Product 2",
      detail: "Detail for Product 2",
      price: "$200",
      image:
        "https://loremflickr.com/cache/resized/defaultImage.small_400_400_nofilter.jpg",
      quantity: 1, // Kuantitas ditambahkan
    },
    // tambahkan produk lainnya di sini
  ];

  const handleDelete = (productId: number) => {
    // logika untuk menghapus produk dari wishlist
    console.log(`Product ${productId} deleted`);
  };

  const handleSeeDetail = (productDetail: string) => {
    // logika untuk melihat detail produk
    console.log(productDetail);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="bg-gray-50 text-black flex justify-center items-center p-10 font-bold text-3xl">
        <h1>My Wishlist</h1>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Delete</span>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">See Detail</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                        onClick={() => handleDelete(product.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-24 w-24 mr-2 inline-block rounded-md"
                      />
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.detail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleSeeDetail(product.detail)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        See Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
