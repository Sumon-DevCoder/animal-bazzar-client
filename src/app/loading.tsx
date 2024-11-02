const loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s] transform scale-90 hover:scale-105 transition-all duration-300 ease-in-out"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s] transform scale-90 hover:scale-105 transition-all duration-300 ease-in-out"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce transform scale-90 hover:scale-105 transition-all duration-300 ease-in-out"></div>
      </div>
    </div>
  );
};

export default loading;
