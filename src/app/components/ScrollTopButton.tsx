"use client";

import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed z-50 rounded-full bottom-8 right-8 w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-lg border-green-600 border-2 flex items-center justify-center transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp className="text-xl text-green-600 " />
      </button>
    )
  );
};

export default ScrollToTopButton;
