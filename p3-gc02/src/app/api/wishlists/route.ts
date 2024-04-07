import { Wishlist } from "@/app/type";
import WishlistModel from "@/db/models/wishlist";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const wishlists = WishlistModel.findAll();

  return NextResponse.json({ data: wishlists }, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    const { productId }: { productId: string } = await request.json();

    // console.log(request.headers.get("x-user-id"), "<<<< user id di route");
    // console.log(
    //   request.headers.get("x-user-email"),
    //   "<<<< user email di route"
    // );

    const data = {
      userId: request.headers.get("x-user-id") as string,
      productId: productId,
    };

    const response = await WishlistModel.addWishlist(data);

    const findWishlist = await WishlistModel.findWislistById(
      String(response.insertedId)
    );
    
    return NextResponse.json({
      message: `Berhasil menambahkan ${findWishlist.Product.name} ke wishlist mu.`,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { wishlistId }: { wishlistId: string } = await request.json();

    const userId = request.headers.get("x-user-id") as string;

    // const objectUserId = new ObjectId(userId);

    // console.log(objectUserId, "<<<<<")

    const findWishlist = (await WishlistModel.findWislistById(
      wishlistId
    )) as Wishlist;

    if (!findWishlist) {
      return NextResponse.json(
        {
          message: "Wishlist item is not found.",
        },
        {
          status: 404,
        }
      );
    }

    // if (findWishlist.userId !== objectUserId) {
    //   throw new Error("You're not allowed to do this process");
    // }

    const response = await WishlistModel.deleteOneWishlist(wishlistId);

    return NextResponse.json({
      message: `Berhasil menghapus ${findWishlist.Product.name} dari wishlist mu.`,
    });
  } catch (error) {
    console.log(error);
  }
}
