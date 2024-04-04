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

export type LoginInput = {
  email: string;
  password: string;
};

export type MyResponse<T = null>  = {
  message?: string;
  data?: {
    accessToken: string;
  };
};
