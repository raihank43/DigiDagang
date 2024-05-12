"use client";

import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

export default function ProductDetailCarousel({
  images,
}: {
  images: string[];
}) {
  return (
    <div className="carousel h-fit md:h-80 rounded-lg">
      {images.map((el, index) => {
        return (
          <div
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
            key={index}
          >
            <img src={el} className="w-full h-full object-cover" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <Link
                href={`#slide${index === 0 ? images.length : index}`}
                className="btn btn-circle transition-colors duration-200 hover:bg-white"
              >
                ❮
              </Link>
              <Link
                href={`#slide${index + 2 > images.length ? 1 : index + 2}`}
                className="btn btn-circle transition-colors duration-200 hover:bg-white"
              >
                ❯
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
