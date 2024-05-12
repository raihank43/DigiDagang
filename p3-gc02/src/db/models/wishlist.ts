import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

type Wishlist = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const WishlistSchema = z.object({
  userId: z.string().min(1),
  productId: z.string().min(1),
});

type WishlistInputSchema = z.infer<typeof WishlistSchema>;

export default class WishlistModel {
  static wishlistCollection() {
    return db.collection("wishlists");
  }

  static async findAll() {
    return (await this.wishlistCollection().find().toArray()) as Wishlist[];
  }

  static async getUserWishlistItems(userId: string) {
    const wishlistData = await this.wishlistCollection()
      .aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "Product",
          },
        },
        {
          $unwind: {
            path: "$Product",
          },
        },
      ])
      .toArray() as Wishlist[]

    return wishlistData;
  }

  static async addWishlist(newWishlist: WishlistInputSchema) {
    const wishlistParsed = WishlistSchema.parse(newWishlist);

    console.log(wishlistParsed, "<<<<< parsed");

    return await this.wishlistCollection().insertOne({
      userId: new ObjectId(wishlistParsed.userId),
      productId: new ObjectId(wishlistParsed.productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static async findWislistById(wishlistId: string) {
    const wishlistData = await this.wishlistCollection()
      .aggregate([
        {
          $match: {
            _id: new ObjectId(wishlistId),
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "Product",
          },
        },
        {
          $unwind: {
            path: "$Product",
          },
        },
      ])
      .toArray();

    return wishlistData[0];
  }

  static async deleteOneWishlist(wishlistId: string) {
    return await this.wishlistCollection().deleteOne({
      _id: new ObjectId(wishlistId),
    });
  }
}
