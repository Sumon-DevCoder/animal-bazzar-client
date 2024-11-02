import React from "react";
import heroImg from "../../../../../../public/assets/banner_img.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";

const Banner = () => {
  return (
    <div>
      <div
        className="relative md:h-[600px] h-[500px] bg-cover bg-center mt-[2px]"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-70"></div>

        {/* Animated content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center p-4 space-y-4">
          <h1
            data-aos="fade-down"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2"
          >
            Discover the World of Animals at Your Fingertips
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto"
          >
            Find everything you need for your pets and animal companions, from
            food to accessories, all in one place.
          </p>

          <PrimaryButton name="BUY NOW" path="/" />
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
