"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useCreateCartMutation } from "@/redux/features/cart/cartApi";
import Image from "next/image";
import useCurrentUserInfo from "../../../../hooks/useCurrentUserInfo";
import { TError } from "@/types/gobal.js";
import { toast } from "sonner";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  const { user } = useCurrentUserInfo();

  const [createCart] = useCreateCartMutation();

  const { name, price, image, description, _id } = data?.data || {};

  const handleAddCart = async (productId: string) => {
    if (user && user?.email) {
      try {
        const cartInfo = {
          product: productId,
          productName: name,
          price,
          user: user?.email,
        };

        console.log(cartInfo);

        const res = await createCart(cartInfo).unwrap();

        if (res) {
          toast.success("Cart added successfully");
        }
      } catch (err) {
        const serverMsgErr =
          (err as TError)?.data?.message || "Something went wrong";
        toast.error(serverMsgErr);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="relative">
          <Image
            className="w-full h-64 object-cover"
            src={image}
            alt={name}
            width={500} // Set a suitable width
            height={400} // Set a suitable height
            layout="responsive" // Ensures the image is responsive
          />
          <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
            Featured
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-2xl font-bold text-gray-800">${price}</span>
            <button
              onClick={() => handleAddCart(_id)}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
