import React from "react";

const Banner = () => {
  return (
    <div className="w-full my-6 px-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://source.unsplash.com/1600x600/?grocery,vegetable" // replace with your actual image
          alt="Banner Image"
          className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center sm:text-start  px-4">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold capitalize leading-tight">
            Get your groceries <br /> delivered in just 10 minutes
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg font-medium mt-2 capitalize">
            Fresh and fast delivery to your doorstep!
          </p>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white 
             py-2 px-4 text-sm 
             sm:py-2 sm:px-6 sm:text-base 
             md:py-3 md:px-8 md:text-lg 
             rounded mt-4 transition-all duration-300 ease-in-out"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
