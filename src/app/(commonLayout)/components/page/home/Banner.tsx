"use client";

import React from "react";
import heroImg from "../../../../../../public/assets/banner_img.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div
        className="relative md:h-[500px] h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-900 dark:from-gray-900 dark:to-gray-700  opacity-70"></div>

        {/* Static content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center p-4 space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2 dark:text-green-400">
            Discover the World of Animals at <br /> Your Fingertips
          </h1>

          <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
            Find everything you need for your pets and animal companions, from
            food to accessories, all in one place.
          </p>

          <div>
            <PrimaryButton
              name="BUY NOW"
              path="/product"
              icons={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l1 7h12l1-7h2M6 20a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4zM4 6h16"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
