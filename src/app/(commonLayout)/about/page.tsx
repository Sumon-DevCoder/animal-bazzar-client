import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 p-8 bg-gray-50">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">
          About Animal Bazaar
        </h2>
        <p className="text-gray-600">
          Animal Bazaar is dedicated to helping you find your perfect pet while
          ensuring a seamless and delightful experience. Our focus is on
          quality, trust, and exceptional service.
        </p>
        <ul className="space-y-3 text-gray-600">
          <li>📞 Book Service 24/7</li>
          <li>👩‍💼 Experienced, Professional Staff</li>
          <li>✅ Insured & Background Checked</li>
          <li>🏠 Free In-Home Consultation</li>
          <li>😊 Customer Satisfaction Surveys</li>
        </ul>
        <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-3xl shadow hover:bg-green-600 transition duration-200">
          Contact Us
        </button>
      </div>

      {/* Right Image Grid */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        <Image
          height="100"
          width="100"
          src="https://i.ibb.co.com/HYnWfHk/FB-IMG-16760824427475056.jpg"
          alt="Animal 1"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <Image
          height="200"
          width="200"
          src="https://i.ibb.co.com/wsfz1NP/FB-IMG-16766010392534402.jpg"
          alt="Animal 2"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <Image
          height="200"
          width="200"
          src="https://i.ibb.co.com/Q6xwHxc/FB-IMG-16761682792266182.jpg"
          alt="Animal 3"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <Image
          height="100"
          width="200"
          src="https://i.ibb.co.com/Xk9Lbhh/FB-IMG-16761792079135777.jpg"
          alt="Animal 4"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
