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

  const { name, price, image, description, _id, category, stockQuantity } =
    data?.data || {};

  const handleAddCart = async (productId: string) => {
    if (email && email) {
      try {
        const cartInfo = {
          product: productId,
          productName: name,
          price,
          user: email,
        };

        console.log(cartInfo);

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
    <div className="flex justify-center items-center  min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-6 py-20">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
        <div className="relative">
          <Image
            className="w-full h-72 object-cover rounded-t-3xl"
            src={image}
            alt={name}
            width={500}
            height={400}
            layout="responsive"
          />
          <div className="absolute top-3 left-3 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        </div>

        <div className="p-8">
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
