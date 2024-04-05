import { z } from "zod";
import { db } from "../config";

const productSchema = z.object({});

type Product = {
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: string[];
  thumbnail: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  id: string;
};

export default class ProductModel {
  static productCollection() {
    return db.collection<Product>("products");
  }

  static async findAll() {
    return this.productCollection().find().toArray();
  }

  static async findProductBySlug(slug: string) {
    const productCollection = this.productCollection();

    const findProduct = await productCollection.findOne({ slug });

    return findProduct;
  }
}
