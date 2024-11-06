import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-purple-100 to-indigo-200 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          About Us
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            Our mission is to provide a seamless, user-friendly platform for all
            animal enthusiasts to explore and buy a wide variety of animals with
            ease and confidence. We strive to create a safe and reliable
            environment where people can find pets or farm animals with detailed
            information and guidance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            We envision becoming the leading platform for animal lovers,
            offering a broad selection of animals, exceptional customer support,
            and a trusted community of sellers and buyers. Our goal is to ensure
            a positive experience for every user, with a commitment to animal
            welfare and education.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Have questions or need assistance? Reach out to our support team:
          </p>
          <ul className="list-none mt-4 space-y-2">
            <li className="text-lg text-gray-800">
              Email: support@animalbazaar.com
            </li>
            <li className="text-lg text-gray-800">Phone: +1 (800) 123-4567</li>
          </ul>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Join Us Today!
          </h2>
          <p className="text-lg text-gray-600">
            Whether you&apos;re looking to adopt a pet or find farm animals, we
            have something for everyone. Start exploring now and join the Animal
            Bazaar community!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
