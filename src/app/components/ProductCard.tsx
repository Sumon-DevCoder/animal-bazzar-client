import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TProduct } from "@/types/gobal";
import Link from "next/link";

const ProductCard = ({ product }: { product: TProduct }) => {
  const { name, price, like, img, _id } = product || {};

  // States for random rating and like count
  const [rating, setRating] = useState<string>("0.0");
  const [likeCount, setLikeCount] = useState<number>(0);

  // Function to generate a random rating
  const generateRandomRating = () => {
    return (Math.random() * (5 - 1) + 1).toFixed(1); // Between 1 and 5
  };

  // Function to generate a random like count
  const generateRandomLikes = () => {
    return Math.floor(Math.random() * 1000); // Between 0 and 999
  };

  useEffect(() => {
    setRating(generateRandomRating());
    setLikeCount(generateRandomLikes());
  }, []);

  // Handle Like Button Click
  const handleLikeClick = () => {
    setLikeCount((prev) => (likeCount ? prev + 1 : prev + 1)); // Toggle like count
  };

  return (
    <div className="relative w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Product Image */}
      <div className="w-full h-48 bg-gray-200">
        <Image
          src={img?.[0] || "/default-image.jpg"} // Default image fallback
          alt={name || "Product Image"}
          width={256}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        {/* Title and Like */}
        <div className="flex justify-between items-center">
          <h2 className="text-green-600 font-bold text-lg truncate">
            {name || "Unnamed Product"}
          </h2>
          <button
            onClick={handleLikeClick}
            className="text-gray-500 hover:text-red-500 flex gap-0.5"
          >
            <span>{likeCount}</span> <span>{like ? "❤️" : "🤍"}</span>
          </button>
        </div>

        {/* Price and Rating */}
        <div className="flex justify-between items-center">
          <span className="text-red-500 font-semibold">
            ${price?.toFixed(2) || "0.00"}
          </span>
          <span className="flex items-center gap-0.5">
            <span className="text-gray-600 text-md">{rating || "N/A"}</span>
            <span className="pb-1">⭐</span>
          </span>
        </div>
      </div>

      {/* Dedicated Space for Buttons */}
      {/* <div className="relative bottom-0 inset-x-0 flex justify-between px-3.5 items-center bg-white py-2 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition-all duration-300">
          Add to Cart
        </button>
        <button className="bg-[#2DB8AC] bg-opacity-65 text-gray-600 px-4 py-1 rounded hover:bg-blue-600 transition-all duration-300">
          Details
        </button>
      </div> */}
      <div className="relative px-8 bottom-0 inset-x-0 flex items-center justify-center bg-white py-2 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
        <button className=" text-green-600 hover:text-white text-nowrap border-l border-t border-b border-green-600  px-6 py-2 rounded-l-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center">
          Add to Cart
        </button>

        {/* Container for the "or" circle, now flex-based for centering */}
        <div className="flex items-center">
          <span className="text-gray-600 absolute right-[132px] rounded-full border p-2 h-8 w-8 bg-gray-200 flex items-center justify-center">
            or
          </span>
        </div>

        <Link href={`/product/${_id}`}>
          <button className=" text-nowrap border-r-green-500  border-r border-t border-b  border-green-600  px-6 py-2 rounded-r-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 flex items-center justify-center">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
