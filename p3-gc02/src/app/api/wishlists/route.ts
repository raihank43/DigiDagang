import WishlistModel from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const wishlists = WishlistModel.findAll();

  return NextResponse.json({ data: wishlists }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();

    // console.log(request.headers.get("x-user-id"), "<<<< user id di route");
    // console.log(
    //   request.headers.get("x-user-email"),
    //   "<<<< user email di route"
    // );

    const data = {
      userId: request.headers.get("x-user-id") as string,
      productId: productId as string,
    };

    const response = await WishlistModel.addWishlist(data);

    return NextResponse.json({ data: response });
  } catch (error) {
    console.log(error);
  }
}
