import React from "react";
import Banner from "./components/page/home/Banner";
import ProductPage from "./product/page";
import Services from "./components/page/home/Services";
import WhyChooseUs from "./components/page/home/WhyChooseUs";

const HomePage = () => {
  return (
    <div className="dark:bg-gray-800">
      <Banner />
      <Services />
      <div className="max-w-screen-xl m-auto">
        <ProductPage />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default HomePage;
