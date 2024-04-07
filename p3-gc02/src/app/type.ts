import { ObjectId } from "mongodb";

export type Product = {
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

export type Wishlist = {
  _id: ObjectId;
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  Product: Product
};

export type LoginInput = {
  email: string;
  password: string;
};

export type RegisterInput = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type MyResponse<T = null> = {
  currentPage?: number;
  itemsPerPage?: number;
  hasMore?: boolean;
  totalItems?: number;
  totalPage?: number;
  error?: string;
  message?: string;
  data: T;
};
