"use client";

import React from "react";
import heroImg from "../../../../../../public/assets/banner_img.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <div
        className="relative md:h-[400px] min-h-80  bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-900 dark:from-gray-900 dark:to-gray-700 opacity-70"></div>

        {/* Two-side content */}
        <div className="relative flex md:flex-row-reverse flex-col-reverse items-center justify-between h-full text-white text-center md:text-left p-4 space-y-4 md:space-y-0">
          {/* Left content */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-3xl md:text-2xl lg:text-5xl font-bold tracking-wider mb-2  dark:text-green-400">
              Discover the World of{" "}
              {/* <span className="text-green-400">Animals</span> at <br /> */}
              <span className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
                Animals
              </span>{" "}
              at <br />
              Your Fingertips
            </h1>

            <p
              data-aos="fade-up"
              className="text-lg md:text-xl mb-4 lg:mb-6 mt-4 max-w-2xl mx-auto font-sans"
            >
              Find everything you need for your pets and animal companions, from
              food to accessories, loyal dog, a curious cat, or a charming bird
              all in one place.
            </p>
            <div>
              <div className="flex justify-center md:justify-start">
                <button className="flex items-center bg-green-600 text-white px-4 hover:bg-green-500 rounded-full py-2 shadow-md transition-all duration-300 hover:pr-6">
                  <span className="mr-2">Explore Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right content (Swiper slider) */}
          <div className="md:w-1/2 w-full md:p-10 h-64 md:h-[400px] flex items-center hidden md:block">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-full md:h-80"
            >
              <SwiperSlide>
                <Image
                  src="https://i.ibb.co.com/HYnWfHk/FB-IMG-16760824427475056.jpg"
                  alt="Animal 1"
                  className="w-full h-full object-cover rounded-xl"
                  height={100} // Match with Swiper height
                  width={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://i.ibb.co.com/wsfz1NP/FB-IMG-16766010392534402.jpg"
                  alt="Animal 2"
                  className="w-full h-full object-cover rounded-xl"
                  height={100} // Match with Swiper height
                  width={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://i.ibb.co.com/wsfz1NP/FB-IMG-16766010392534402.jpg"
                  alt="Animal 3"
                  className="w-full h-full object-cover rounded-xl"
                  height={100} // Match with Swiper height
                  width={500}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
