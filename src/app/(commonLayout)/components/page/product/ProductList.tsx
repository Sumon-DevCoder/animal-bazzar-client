"use client";
import { TProduct } from "@/app/(commonLayout)/product/page"; // Assuming this is the correct path for your types.
import ProductCard from "@/app/components/ProductCard";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = ["All", "Fish", "Cow", "Hen", "Duck"];

const ProductList = ({ productsData }: { productsData: TProduct[] }) => {
  const [products] = useState(productsData || []);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

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
    setCurrentPage(1);
  };

  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredProducts.length, totalPages]);

  return (
    <div className="dark:bg-gray-800 dark:text-gray-100 bg-gray-50 text-gray-800 min-h-screen transition-all duration-300">
      {/* Search and Filter Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-400 dark:ring-gray-400 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 text-black transition-all duration-300 ease-in-out"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/2 focus:outline-none dark:text-white focus:ring-2 focus:ring-green-400 dark:ring-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 text-black transition-all duration-300 ease-in-out"
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
            <ProductCard product={product} key={product?._id} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 transform hover:scale-105"
        >
          <FaArrowLeft />
        </button>
        <span className="text-gray-700 dark:text-gray-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 transform hover:scale-105"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
