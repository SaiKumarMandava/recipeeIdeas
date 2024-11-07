import React, { useEffect, useState } from "react";
import KitchenImage from "../components/assets/ss.webp";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function IndividualCategory() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { idCategory } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );

        const category = response.data.categories.find(
          (cat) => cat.idCategory === idCategory
        );

        if (category) {
          setData(category);
        } else {
          console.error("Category not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [idCategory]);

  console.log(data);

  if (loading) return <p>loading......</p>;

  return (
    <div className="lg:mt-[-85px] lg:ml-20 py-5 flex justify-center items-center">
    {data ? (
      <div className="relative flex mx-auto flex-col lg:flex-row py-6 lg:pt-0 lg:pb-0">
        <div className="w-full px-4 mx-auto lg:px-0">
          <img
            className="object-cover lg:mt-40 w-full h-56 rounded shadow-lg lg:rounded-md lg:shadow-none sm:h-96 lg:h-96"
            src={data.strCategoryThumb}
            alt="Category"
          />
        </div>
  
        <div className="flex flex-col items-start justify-center w-full px-4 lg:px-8">
          <div className="mb-16 lg:my-40 lg:max-w-full lg:pr-5">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg py-4 lg:py-0 lg:mb-6 font-satoshi font-bold text-3xl tracking-tight text-gray-600 sm:text-4xl sm:leading-none">
                {data.strCategory}
              </h2>
              <p className="text-base text-gray-700 text-[20px] font-satoshi font-regular">
                {data.strCategoryDescription}
              </p>
            </div>
            <div className="flex">
              <Link
                to={`/individualCategory/${data.strCategory}`}
                className="flex justify-center lg:text-[20px] items-center lg:h-16 w-full h-12 px-6 lg:px-16 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-black hover:bg-white hover:border-2 hover:border-black hover:text-black focus:shadow-outline focus:outline-none"
              >
                Explore {data.strCategory} Recipes
              </Link>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="py-52 h-full  text-lg font-satoshi text-gray-700">
        Category Not Found
      </div>
    )}
  </div>
  
  );
}
