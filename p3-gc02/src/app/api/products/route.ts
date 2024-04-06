import { MyResponse, Product } from "@/app/type";
import ProductModel from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") || "1";

    //handling pagination
    const limit = 4; // menentukan seberapa banyak data yang ingin ditampilkan pada setiap page
    const skip = page == "1" ? 0 : Number(page) * limit - limit;

    console.log({ limit, skip, page });

    const response = await ProductModel.findAll(skip, limit);

    const products = response.products;
    const totalAllProducts = response.countProducts;

    // console.log(totalAllProducts)

    return NextResponse.json<MyResponse<Product[]>>(
      {
        currentPage: Number(page),
        itemsPerPage: products.length,
        hasMore:
          Number(page) < Math.ceil(totalAllProducts / limit) ? true : false,
        totalItems: totalAllProducts,
        totalPage: Math.ceil(totalAllProducts / limit),
        data: products,
      },
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
