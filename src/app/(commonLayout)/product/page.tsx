import nexiousInstance from "@/config/nexious.config";
import React from "react";
import ProductList from "../components/page/product/ProductList";

export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  isDeleted: boolean;
  image: string;
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

  const products = res?.data?.data?.result || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductList productsData={products} />
    </div>
  );
};

export default ProductPage;
