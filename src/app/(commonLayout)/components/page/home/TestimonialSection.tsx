"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Custom arrow icons from react-icons

const testimonials = [
  {
    name: "John & Bella",
    image:
      "https://peto.themeftc.com/wp-content/uploads/2019/08/2categories1.png",
    text: "Our duck, Bella, has been a joy to our family. We couldn't have asked for a better pet!",
    quote:
      "Animal Bazaar made it so easy to find the perfect companion for us!",
  },
  {
    name: "Emily & Charlie",
    image:
      "https://peto.themeftc.com/wp-content/uploads/2019/08/2categories3.png",
    text: "Charlie, our new goat, has brought so much fun and laughter to our farm. He’s so friendly!",
    quote: "Thanks to Animal Bazaar, we found the perfect farm animal!",
  },
  {
    name: "David & Lily",
    image:
      "https://peto.themeftc.com/wp-content/uploads/2017/06/630-client-3.png",
    text: "Lily the hen has been an amazing addition to our backyard. We love her eggs!",
    quote:
      "We are so grateful to Animal Bazaar for connecting us with such a lovely pet.",
  },
  {
    name: "Sara & Max",
    image:
      "https://peto.themeftc.com/wp-content/uploads/2019/08/2categories2.png",
    text: "Max, our new dog, is a bundle of joy! We love his playful energy and loyalty.",
    quote:
      "Animal Bazaar helped us find the perfect furry friend for our family!",
  },
  {
    name: "Mike & Daisy",
    image: "https://via.placeholder.com/150",
    text: "Daisy, our new cow, has been such a wonderful addition to our farm. We can't wait for fresh milk every day!",
    quote: "Thanks to Animal Bazaar, our farm feels complete with Daisy!",
  },
  {
    name: "Laura & Tigger",
    image: "https://via.placeholder.com/150",
    text: "Tigger, our new rabbit, is the sweetest little companion. He’s made our home feel more lively.",
    quote: "We found the perfect pet for our family with Animal Bazaar’s help!",
  },
  {
    name: "Tom & Bella",
    image: "https://via.placeholder.com/150",
    text: "Bella, our cat, has brought so much peace and love into our home. We can’t imagine life without her.",
    quote:
      "Animal Bazaar made it so easy to adopt Bella. She's the best pet we could ask for!",
  },
  {
    name: "Sophia & Rex",
    image: "https://via.placeholder.com/150",
    text: "Rex, our new horse, has been incredible! We love going on trail rides together.",
    quote:
      "Thanks to Animal Bazaar, we’ve found a companion that shares our love for outdoor adventures!",
  },
  {
    name: "Jack & Penny",
    image: "https://via.placeholder.com/150",
    text: "Penny, our parrot, is full of personality! She makes our home lively with her funny antics.",
    quote: "Animal Bazaar helped us find the perfect feathered friend!",
  },
  {
    name: "Anna & Toby",
    image: "https://via.placeholder.com/150",
    text: "Toby, our hamster, is so cute and easy to care for. He’s been a great first pet for our kids.",
    quote:
      "Animal Bazaar made it so easy to choose the perfect pet for our little ones!",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          What Our Customers Say
        </h2>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Show one slide at a time
          loop={true} // Infinite loop
          navigation={{
            nextEl: ".swiper-button-next", // Set the custom next button
            prevEl: ".swiper-button-prev", // Set the custom prev button
          }}
          pagination={{ clickable: true }} // Enable pagination (dots)
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide on small screens
            },
            768: {
              slidesPerView: 2, // 2 slides on medium screens
            },
            1024: {
              slidesPerView: 3, // 3 slides on larger screens
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s pet`}
                  height={100}
                  width={100}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">
                  {testimonial.text?.slice(0, 80)}...
                </p>
                <p className="italic text-gray-500 dark:text-gray-400">
                  {testimonial.quote?.slice(0, 80)}...
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom arrow buttons */}
        <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-gray-800 dark:text-white">
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-gray-800 dark:text-white">
          <FaArrowRight />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
