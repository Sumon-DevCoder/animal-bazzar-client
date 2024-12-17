import { FaShippingFast, FaTags, FaShieldAlt, FaGift } from "react-icons/fa";

const Services = () => {
  const features = [
    {
      icon: <FaShippingFast className="h-8 w-8 text-blue-500" />,
      title: "Free Shipping",
      description: "All orders over $150",
    },
    {
      icon: <FaTags className="h-8 w-8 text-green-500" />,
      title: "15% Discount",
      description: "For First Order",
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-purple-500" />,
      title: "Secure Payment",
      description: "Confirmed",
    },
    {
      icon: <FaGift className="h-8 w-8 text-pink-500" />,
      title: "Awesome Gift",
      description: "Every Month",
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-green-600 via-gray-400 to-green-700   dark:from-gray-600 dark:to-gray-700 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
