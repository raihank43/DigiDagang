"use server";

import { MyResponse, Product } from "../type";

export async function fetchProductsServerAction() {
  const response = await fetch("http://localhost:3000/api/products");

  const result = response.json()

  if (!response.ok) {
    // this will activate the closest `error.js` error boundary
    throw new Error("Failed to fetch data");
  }

  return result;
}
