import ProductModel from "@/db/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const product = await ProductModel.findProductBySlug(params.slug);
    if (!product) {
      return NextResponse.json({ error: "Product not Found." }, { status: 404 });
    }
    return NextResponse.json({ data: product });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
