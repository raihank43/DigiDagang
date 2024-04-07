"use server";

import { MyResponse, Product } from "../type";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function fetchProductsServerAction() {
  const response = await fetch(baseURL + "products");

  const result = response.json();

  if (!response.ok) {
    // this will activate the closest `error.js` error boundary
    throw new Error("Failed to fetch data");
  }

  return result;
}

export async function fetctProductsBySlugServerAction(slug: string) {
  const res = await fetch(baseURL + "products/" + slug);
  if (!res.ok) {
    console.log("masukkk");
    throw new Error("Something went wrong!");
  }
  const result = (await res.json()) as MyResponse<Product>;

  return result;
}
