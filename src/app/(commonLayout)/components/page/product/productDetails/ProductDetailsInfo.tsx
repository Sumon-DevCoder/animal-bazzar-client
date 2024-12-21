// import { useCreateCartMutation } from "@/redux/features/cart/cartApi";
import Image from "next/image";
import { TProduct } from "@/types/gobal.js";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
import { useState } from "react";
// import useCurrentUserInfo from "@/hooks/useCurrentUserInfo";
import { FaHeart, FaShareAlt } from "react-icons/fa"; // Use react icons for a modern feel
import Link from "next/link";

const ProductDetailsInfo = ({ product }: { product: TProduct }) => {
  // const { email } = useCurrentUserInfo();
  // const router = useRouter();
  // const [createCart] = useCreateCartMutation();

  const {
    _id,
    name,
    description,
    price,
    stockQuantity,
    category,
    img = [],
    // like,
    age,
    color,
    size,
  } = product || {};

  const [currentImg, setCurrentImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // const handleAddCart = async () => {
  //   if (email) {
  //     try {
  //       const cartInfo = {
  //         product: _id,
  //         productName: name,
  //         price,
  //         user: email,
  //         quantity,
  //       };

  //       const res = await createCart(cartInfo).unwrap();
  //       if (res) {
  //         toast.success("Cart added successfully");
  //         router.push("/cart");
  //       }
  //     } catch (err) {
  //       const serverMsgErr =
  //         (err as TError)?.data?.message || "Something went wrong";
  //       toast.error(serverMsgErr);
  //     }
  //   }
  // };

  return (
    <div className="flex flex-col lg:flex-row gap-10 mb-10">
      {/* Image Gallery */}
      <div className="w-full lg:w-7/12">
        {img.length > 0 && (
          <div className="relative">
            <Image
              src={img[currentImg]}
              alt={name}
              width={600}
              height={600}
              className="w-full max-h-96 object-cover rounded-lg border shadow-lg"
            />
            <div className="flex justify-center mt-4 space-x-3">
              {img.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImg(index)}
                  className={`w-16 h-16 border rounded-lg transition duration-300 ease-in-out ${
                    currentImg === index
                      ? "border-green-500 transform scale-105"
                      : "border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index}`}
                    width={60}
                    height={60}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="w-full lg:w-1/2">
        {/* Header Section */}
        <div className="flex gap-5 space-y-1">
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
            {name}
          </h2>
          <div className="flex items-center space-x-2">
            <p className="flex items-center text-lg text-yellow-500">
              {[...Array(4)].map((_, i) => (
                <span key={i}>★</span>
              ))}
              <span className="text-gray-400 dark:text-gray-500">☆</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">(50 Reviews)</p>
          </div>
        </div>

        {/* Description Section */}
        <div>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            {description?.slice(0, 200)}...
            <button className="text-green-600 text-md dark:text-green-300 ml-2 underline">
              Read More
            </button>
          </p>
        </div>

        {/* Additional Details */}
        {/* <div className="mt-2">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-gray-700 dark:text-white">
              Category:
            </span>
            <p className="font-light text-gray-800 dark:text-gray-200">
              {category}
            </p>
          </div>
          <div className="flex items-center space-x-1 ">
            <span className="font-bold text-gray-700 dark:text-white">
              Age:
            </span>
            <p className="font-light text-gray-800 dark:text-gray-200">
              {age?.value} {age?.unit || "months"}
            </p>
          </div>

          <div className="flex items-center space-x-1 ">
            <span className="font-bold text-gray-700 dark:text-white">
              Color:
            </span>
            <p className="font-light text-gray-800 dark:text-gray-200">
              {color}
            </p>
          </div>
          <div className="flex items-center space-x-1 ">
            <span className="font-bold text-gray-700 dark:text-white">
              Size:
            </span>
            <p className="font-light text-gray-800 dark:text-gray-200">
              {size?.value} {size?.unit || ""}
            </p>
          </div>
        </div> */}

        <div className="mt-2">
          <table className="min-w-full table-auto border-separate border-spacing bg-slate-200 dark:bg-slate-700">
            <thead>
              <tr>
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700">
                  Featured
                </th>
                <th className="py-2 px-3 text-left text-sm font-semibold text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-white">
                  Category:
                </td>
                <td className="py-2 px-3 text-sm text-gray-800 dark:text-gray-200">
                  {category}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-white">
                  Age:
                </td>
                <td className="py-2 px-3 text-sm text-gray-800 dark:text-gray-200">
                  {age?.value} {age?.unit || "months"}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-white">
                  Color:
                </td>
                <td className="py-2 px-3 text-sm text-gray-800 dark:text-gray-200">
                  {color}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-white">
                  Size:
                </td>
                <td className="py-2 px-3 text-sm text-gray-800 dark:text-gray-200">
                  {size?.value} {size?.unit || ""}
                </td>
              </tr>
              <tr className="bg-green-500 bg-opacity-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <td className="py-2 px-3 text-sm text-gray-700 dark:text-white">
                  Price
                </td>
                <td className="py-2 px-3 text-sm text-gray-800 dark:text-gray-200">
                  ${price}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quantity Selector */}
        <div className="flex justify-between  my-3 px-1">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-300">Quantity:</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
              >
                –
              </button>
              <input
                type="tel"
                min="1"
                max={stockQuantity}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-12 py-0.5 border dark:border-gray-500 rounded-lg focus:outline-none text-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                style={{
                  appearance: "none",
                  MozAppearance: "textfield", // For Firefox
                  WebkitAppearance: "none", // For Chrome/Safari
                  paddingRight: "10px", // To ensure no extra space for spinner in some browsers
                }}
              />
              <button
                onClick={() =>
                  setQuantity((prev) => Math.min(prev + 1, stockQuantity))
                }
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-2">
                <FaShareAlt /> Share
              </button>
              <button className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-2">
                <FaHeart /> Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div>
          <div className="relative bottom-0 inset-x-0 flex items-center justify-start bg-white dark:bg-gray-800 py-2 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
            <button className="text-green-600 hover:text-white sm:px-8 md:px-16 lg:px-24 text-nowrap border-l border-t border-b border-green-600 py-2 rounded-l-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center">
              Add to Cart
            </button>

            {/* Container for the "or" circle, now flex-based for centering */}
            <div className="flex items-center">
              <span className="text-gray-600 dark:text-gray-300 absolute right-[254px] rounded-full border p-2 h-8 w-8 bg-gray-200 dark:bg-gray-700 flex items-center justify-center dark:border-gray-400">
                or
              </span>
            </div>

            <Link href={`/product/${_id}`}>
              <button className="text-nowrap sm:px-8 md:px-16 lg:px-24 border-r-green-500 dark:text-gray-100 border-r border-t border-b border-green-600 py-2 rounded-r-lg text-white bg-green-600 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-600 transition-all duration-300 flex items-center justify-center">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
