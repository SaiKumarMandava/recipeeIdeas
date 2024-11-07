import React from "react";
import KitchenImage from "../components/assets/ss.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="lg:py-4 flex justify-center items-center lg:ml-40">
      <div className="relative flex mx-auto flex-col lg:flex-row  py-16 lg:pt-0 lg:pb-0">
        <div className="w-full max-w-xl px-4 mx-auto lg:px-0 lg:w-1/2 lg:max-w-full">
          <img
            className="object-cover w-full h-56 rounded  shadow-lg lg:rounded-md lg:shadow-none sm:h-96 lg:h-full"
            src={KitchenImage}
            alt="image"
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl lg:w-1/2 lg:ml-auto">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg py-4 lg:py-0 lg:mb-6 font-satoshi font-bold  text-3xl  tracking-tight text-gray-600 sm:text-4xl sm:leading-none">
                SmartChef
              </h2>
              <p className="text-base text-gray-700 text-[20px] font-satoshi font-regular">
                Step into the kitchen with confidence! SmartChef brings recipes
                to life based on what you have on hand, how much time you have,
                and even what you’re in the mood for. Whether it’s a quick
                weekday meal or a cozy, comforting dish, SmartChef helps you
                discover new favorites without the fuss. Just choose your mood,
                check your ingredients, and let SmartChef guide you to a meal
                worth savoring.
              </p>
            </div>
            <div className="flex ">
              <Link
                to={"/categories"}
                className="flex justify-center items-center w-full h-12 px-6 lg:px-16  mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black focus:shadow-outline focus:outline-none"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
