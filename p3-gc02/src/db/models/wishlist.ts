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
}
