import nexiousInstance from "@/config/nexious.config";
import React from "react";
import ProductList from "../components/page/product/ProductList";
// import { shuffleArrayData } from "@/app/components/ShuffleArrayData";

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  isDeleted: boolean;
  img: string[];
  age: {
    value: number;
    unit: "day" | "week" | "month" | "year";
  };
  like: number;
  color: string;
  size: {
    value: number;
    unit: "kg" | "gm";
  };
};

type TProductRes = {
  data: {
    result: TProduct[];
  };
};

const ProductPage = async () => {
  const res = await nexiousInstance.get<TProductRes>("/products", {
    cache: "no-store",
  });

  console.log("res", res);

  const products = res?.data?.data?.result || [];

  // const products = shuffleArrayData(productData);

  return (
    <div className="p-6">
      <h1 className="text-xl  lg:text-3xl font-bold  text-center text-black dark:text-white pt-10">
        Available Animal & Pets
      </h1>
      <p className="text-xl lg:text-md my-2 mb-5 text-center text-black dark:text-white">
        You can categories your favorite pets search and filtering
      </p>
      <ProductList productsData={products} />
    </div>
  );
};

export default ProductPage;
