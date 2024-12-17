"use client";
const DynamicLoader = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-10 animate-pulse" />

        <span className="sr-only">Loading...</span>

        <div className="flex space-x-3">
          <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full animate-bounce [animation-delay:-0.3s] transform hover:scale-110 transition-transform duration-300 ease-in-out"></div>
          <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full animate-bounce [animation-delay:-0.15s] transform hover:scale-110 transition-transform duration-300 ease-in-out"></div>
          <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full animate-bounce transform hover:scale-110 transition-transform duration-300 ease-in-out"></div>
        </div>

        <style jsx>{`
          .animate-bounce {
            animation: bounce 1.4s infinite;
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default DynamicLoader;
