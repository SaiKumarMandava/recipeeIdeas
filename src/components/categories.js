import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../shared/loader'
export default function Categories() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCategory = data?.categories?.filter((item) =>
    item.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(filteredCategory);

  // localeCompare is used to compare strings in a locale-sensitive way, which means it will give you the correct alphabetical order. The localeCompare function returns a negative value if a should be sorted before b, a positive value if a should be sorted after b, and 0 if they are equal. This ensures that the array is sorted alphabetically based on the common property of each country's name.

  filteredCategory?.sort((a, b) =>
    a?.strCategory?.localeCompare(b.strCategory)
  );

  const hanleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) return <Loader/>;

  console.log(data);
  return (
    <div>
      <div className="px-4 mb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
        <div className="w-full flex flex-col lg:flex-row lg:justify-between  py-6">
          <p
            aria-label="Category"
            title="Visit the East"
            className="inline-block py-3 text-xl font-satoshi font-bold text-gray-700 leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Categories
          </p>

          <div>
            <input
              type="Search"
              placeholder="Search by Category, eg:Beef"
              value={searchTerm}
              onChange={hanleSearch}
              // style={{
              //   width: "100%",
              //   width: "400px",
              //   padding: "10px",
              //   outline: "none",
              //   borderRadius: "5px 5px 5px 5px",
              // }}
              className=" w-full p-4 lg:w-[400px] rounded-md outline-none  bg-gray-200"
            />
          </div>
        </div>

        <div className="grid gap-8  lg:grid-cols-3 w-full sm:mx-auto lg:max-w-full">
          {filteredCategory && filteredCategory?.length > 0 ? (
            filteredCategory.map((item, index) => (
              <div
                className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md border-1"
                key={index}
              >
                <img
                  src={item?.strCategoryThumb}
                  className="object-cover w-full py-0"
                  alt=""
                />
                <div className="p-5 ">
                  <p
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-xl font-satoshi font-bold text-gray-700 leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    {item?.strCategory}
                  </p>

                  <p className="mb-2 text-gray-600 truncate font-satoshi font-normal">
                    {item?.strCategoryDescription ||
                      "Description Not Available"}
                  </p>

                  <Link
                    to={`/individualCategoryDetails/${item?.idCategory}`}
                    aria-label=""
                    className="flex justify-center items-center py-3 mt-5 border-2 rounded-md font-satoshi items-cent 
                     font-semibold text-red-500 transition-colors duration-200  
                     hover:text-red-400"
                  >
                    See More About {item?.strCategory}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center py-6  text-lg font-satoshi text-gray-700">
              Category Not Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
