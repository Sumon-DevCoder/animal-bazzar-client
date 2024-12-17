"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import offerImg from "../../../../../../public/assets/cat.png";

const OfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 87,
    hours: 22,
    minutes: 56,
    seconds: 51,
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          days--;
        } else {
          clearInterval(timer);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-20 items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={offerImg}
          alt="Ultra Soft Velvet Puppy Bed"
          height="800"
          width="800"
          className="rounded-lg"
        />
      </div>

      {/* Right Side - Offer Details */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          Ultra Soft Velvet Puppy Bed
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400">
          Treat your pet to ultimate comfort with our soft, luxurious puppy bed,
          designed to keep them cozy and happy.
        </p>
        <div className="flex items-center space-x-4 mt-5">
          <span className="text-lg md:text-xl font-semibold text-gray-500 dark:text-gray-400 line-through">
            $37.99
          </span>
          <span className="text-2xl md:text-3xl font-bold text-red-500">
            $24.00
          </span>
          <span className="text-sm md:text-lg font-medium text-green-500 bg-gray-200 rounded-lg p-2">
            50% Off
          </span>
        </div>
        <div className="mt-5">
          <span className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200">
            Time Left:
          </span>
          <div className="flex space-x-4 mt-3 text-gray-900 dark:text-gray-100 text-xl md:text-2xl font-bold">
            <span>
              {timeLeft.days}{" "}
              <span className="text-sm md:text-base font-normal">Days</span>
            </span>
            :
            <span>
              {timeLeft.hours}{" "}
              <span className="text-sm md:text-base font-normal">Hours</span>
            </span>
            :
            <span>
              {timeLeft.minutes}{" "}
              <span className="text-sm md:text-base font-normal">Min</span>
            </span>
            :
            <span>
              {timeLeft.seconds}{" "}
              <span className="text-sm md:text-base font-normal">Secs</span>
            </span>
          </div>
        </div>
        <button className="mt-6 px-6 py-2 md:px-8 md:py-3 bg-green-600 dark:bg-gray-500 text-white text-base md:text-lg font-semibold rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-300 shadow-md">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default OfferSection;
