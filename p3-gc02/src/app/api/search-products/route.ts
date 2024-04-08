import { MyResponse, Product } from "@/app/type";
import ProductModel from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search") || "";

    const response = await ProductModel.findProductByName(search);

    return NextResponse.json<MyResponse<Product[]>>(
      { data: response },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
