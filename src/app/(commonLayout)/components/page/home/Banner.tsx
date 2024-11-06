"use client";

import React from "react";
import heroImg from "../../../../../../public/assets/banner_img.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div
        className="relative md:h-[500px] h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-70"></div>

        {/* Animated content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center p-4 space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2"
          >
            Discover the World of Animals at <br /> Your Fingertips
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto"
          >
            Find everything you need for your pets and animal companions, from
            food to accessories, all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <PrimaryButton
              name="BUY NOW"
              path="/"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
