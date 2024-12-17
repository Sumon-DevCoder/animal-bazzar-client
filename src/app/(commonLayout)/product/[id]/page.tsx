"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useCreateCartMutation } from "@/redux/features/cart/cartApi";
import Image from "next/image";
import useCurrentUserInfo from "../../../../hooks/useCurrentUserInfo";
import { TError } from "@/types/gobal.js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleProductQuery(id);
  const { email } = useCurrentUserInfo();
  const router = useRouter();

  const [createCart] = useCreateCartMutation();

  const {
    _id,
    name,
    description,
    price,
    stockQuantity,
    category,
    img,
    // like,
    // age,
    // color,
    // size,
  } = data?.data || {};

  const handleAddCart = async (productId: string) => {
    if (email && email) {
      try {
        const cartInfo = {
          product: productId,
          productName: name,
          price,
          user: email,
        };

        const res = await createCart(cartInfo).unwrap();

        if (res) {
          toast.success("Cart added successfully");
          router.push("/cart");
        }
      } catch (err) {
        const serverMsgErr =
          (err as TError)?.data?.message || "Something went wrong";
        toast.error(serverMsgErr);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8 py-20">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex items-center">
        <div className="w-1/2 p-6">
          <Image
            className="w-full h-full object-cover rounded-lg shadow-md"
            src={img?.[0]}
            alt={name}
            width={500}
            height={500}
            layout="intrinsic"
          />
        </div>

        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">{name}</h2>
          <p className="text-lg text-gray-600 mb-5">{description}</p>

          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-lg text-gray-500">Category</span>
              <span className="text-xl font-medium text-gray-800">
                {category}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg text-gray-500">Price</span>
              <span className="text-2xl font-semibold text-indigo-700">
                ${price}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <span className="text-lg text-gray-500">Stock</span>
              <span className="text-xl font-medium text-gray-800">
                {stockQuantity} left
              </span>
            </div>
            <button
              onClick={() => handleAddCart(_id)}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
