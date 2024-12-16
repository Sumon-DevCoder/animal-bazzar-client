"use client";

import React from "react";
import heroImg from "../../../../../../public/assets/banner_img.jpg";
import PrimaryButton from "@/app/components/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <div
        className="relative md:h-[500px] h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-900 dark:from-gray-900 dark:to-gray-700 opacity-70"></div>

        {/* Two-side content */}
        <div className="relative flex md:flex-row-reverse flex-col items-center justify-between h-full text-white text-center md:text-left p-4 space-y-4 md:space-y-0">
          {/* Left content */}
          <div className="md:w-1/2 w-full space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-wider mb-2 dark:text-green-400">
              Discover the World of Animals at <br /> Your Fingertips
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">
              Find everything you need for your pets and animal companions, from
              food to accessories, all in one place.
            </p>
            <div>
              <div className="flex">
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

          {/* Right content (Swiper slider) */}
          <div className="md:w-1/2 w-full p-10">
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
              className="mySwiper"
            >
              <SwiperSlide>
                <Image
                  src="https://i.ibb.co.com/HYnWfHk/FB-IMG-16760824427475056.jpg"
                  alt="Animal 1"
                  className="w-full h-full object-cover rounded-xl"
                  height={200}
                  width={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://i.ibb.co.com/wsfz1NP/FB-IMG-16766010392534402.jpg"
                  alt="Animal 2"
                  className="w-full h-full object-cover rounded-xl"
                  height={200}
                  width={500}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://i.ibb.co.com/wsfz1NP/FB-IMG-16766010392534402.jpg"
                  alt="Animal 3"
                  className="w-full h-full object-cover rounded-xl"
                  height={200}
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
