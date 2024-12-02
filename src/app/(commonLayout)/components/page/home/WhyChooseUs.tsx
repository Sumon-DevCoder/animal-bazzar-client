import Image from "next/image";
import React from "react";
import { FaPaw, FaShieldAlt, FaHeart } from "react-icons/fa";
import whyChooseUsImg from "../../../../../../public/assets/why-choose-us-h1.png";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div>
        <h2 className="text-4xl text-center font-extrabold text-gray-800 dark:text-gray-100 leading-tight mb-8">
          Why Choose Us
        </h2>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
        {/* Left Side Content */}
        <div>
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="flex items-start gap-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <FaPaw className="text-6xl text-blue-500 bg-blue-100 dark:bg-blue-900 p-3 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Pet Nutritionists
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our in-house pet nutritionists play a crucial role in the
                  creation of Kreme dog and cat food.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-start gap-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <FaShieldAlt className="text-6xl text-green-500 bg-green-100 dark:bg-green-900 p-3 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Quality & Safety
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We own and run operations in all of the facilities in which
                  our dry food is made.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-start gap-6 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <FaHeart className="text-6xl text-red-500 bg-red-100 dark:bg-red-900 p-3 rounded-full shadow-md" />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Health & Well-Being
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Just as important as what we put into our Kreme recipes is
                  what your pet gets...!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src={whyChooseUsImg}
              alt="Happy pets with food"
              width={600}
              height={600}
              className="rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
