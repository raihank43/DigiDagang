import { z } from "zod";
import { db } from "../config";
import { ObjectId } from "mongodb";
import { MyResponse } from "@/app/type";

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

interface Pagination {
  data: Product[];
  currentPage: number;
  currentData: number;
  totalData: number;
  totalPage: number;
}

type countProduct = {
  count: number;
};

export default class ProductModel {
  static productCollection() {
    return db.collection<Product>("products");
  }

  static async findAll(skip: number, limit: number) {
    const products = (await this.productCollection()
      .aggregate([
        {
          $skip:
            /**
             * Provide the number of documents to skip.
             */
            skip,
        },
        {
          $limit:
            /**
             * Provide the number of documents to limit.
             */
            limit,
        },
      ])
      .toArray()) as Product[];

    const countProducts = (await this.productCollection()
      .aggregate([
        {
          $count: "count",
        },
      ])
      .toArray()) as countProduct[];

    const result = {
      products,
      countProducts: countProducts[0].count,
    };
    return result;
  }

  static async findProductByName(search: string) {
    return this.productCollection().find({
      name: { $regex: search, $options: "i" },
    }).toArray()
  }

  static async findProductBySlug(slug: string) {
    const productCollection = this.productCollection();

    const findProduct = await productCollection.findOne({ slug });

    return findProduct;
  }

  static async featuredProducts() {
    const productCollection = this.productCollection();

    const featuredProducts = await productCollection
      .aggregate([
        {
          $limit: 10,
        },
        {
          $sort: {
            price: 1,
          },
        },
      ])
      .toArray();

    return featuredProducts;
  }
}
