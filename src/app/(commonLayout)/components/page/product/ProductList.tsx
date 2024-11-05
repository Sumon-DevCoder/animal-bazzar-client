"use client";
import { TProduct } from "@/app/(commonLayout)/product/page";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ProductListProps = {
  productsData: TProduct[];
};

// Category list
const categories = ["All", "Fish", "Cow", "Hen", "Duck"];

const ProductList = ({ productsData }: ProductListProps) => {
  const [products] = useState(productsData || []);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filter products based on search term and category
  const filterProducts = () => {
    let tempProducts = products;

    if (selectedCategory !== "All") {
      tempProducts = tempProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
    setCurrentPage(1); // Reset to first page when filtering
  };

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Ensure current page is valid when filteredProducts changes
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts.length, totalPages]);

  return (
    <div>
      {/* Search and Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Display message when no products match */}
      {filteredProducts.length === 0 ? (
        <p className="text-center text-red-500 font-semibold">
          No products found matching your search and filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                height={500}
                width={500}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-500 mb-1">Category: {product.category}</p>
              <p className="text-green-600 font-bold text-lg">
                ${product.price}
              </p>
              <Link href={`/product/${product?._id}`} className="btn">
                Details
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition-colors duration-200 disabled:opacity-50"
        >
          <FaArrowLeft />
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400 transition-colors duration-200 disabled:opacity-50"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
