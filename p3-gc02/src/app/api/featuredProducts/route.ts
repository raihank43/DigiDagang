import { MyResponse, Product } from "@/app/type";
import ProductModel from "@/db/models/products";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const featuredProducts = await ProductModel.featuredProducts();

    return NextResponse.json(
      {
        data: featuredProducts,
      },
      { status: 200 }
    );

    // return NextResponse.json({ message: "masukguys" });
  } catch (error) {
    console.log(error);
  }
}
