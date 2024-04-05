import { MyResponse, Product } from "@/app/type";
import ProductModel from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const products = await ProductModel.findAll();

    return NextResponse.json<MyResponse<Product[]>>(
      { data: products },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ data: body }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
