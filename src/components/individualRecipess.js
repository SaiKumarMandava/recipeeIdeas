import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function IndividualRecipess() {
  const { idMeal } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  console.log(idMeal);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        setData(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [idMeal]);

  console.log(data);
  if (loading) return <p>loading......</p>;

  return (
    <div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div>
            <img
              className="object-cover w-full h-full rounded shadow-lg sm:h-96"
              src={data[0]?.strMealThumb}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg font-satoshi lg:mt-[-5px]  text-xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {data[0].strMeal}
              </h2>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2 ">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 h-24">
                <div className=" p-5 border border-l-0 rounded-r h-24">
                  <h6 className="mb-2 font-semibold leading-5">Category</h6>
                  <p className="text-sm text-gray-900">
                    {data[0]?.strCategory || "N/A"}
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 h-24">
                <div className=" p-5 border border-l-0 rounded-r h-24">
                  <h6 className="mb-2 font-semibold leading-5">
                    Number of Likes
                  </h6>
                  <p className="text-sm text-gray-900">
                    {data[0]?.idMeal || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2 py-3">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 h-24">
                <div className=" p-5 border border-l-0 rounded-r h-24">
                  <h6 className="mb-2 font-semibold leading-5">
                    Area Mostly Poular
                  </h6>
                  <p className="text-sm text-gray-900">
                    {data[0]?.strArea || "N/A"}
                  </p>
                </div>
              </div>
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 h-24">
                <div className=" p-5 border border-l-0 rounded-r h-24">
                  <h6 className="mb-2 font-semibold leading-5">Tags</h6>
                  <p className="text-sm text-gray-900">
                    {data[0]?.strTags || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2 ">
              <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 h-24">
                <div className=" p-5 border border-l-0 rounded-r h-24">
                  <h6 className="mb-2 font-semibold leading-5">
                    Time for Cooking
                  </h6>
                  <a
                    href={data[0]?.strSource}
                    target="/blank"
                    className="text-sm text-gray-900"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="overflow-y-auto py-4 ">
            <p className="font-satoshi py-3 font-regular text-[20px] text-gray-600">
              Ingredients Used
            </p>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ingredient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quantity
                  </th>
                </tr>
              </thead>

              {data &&
                data.map((item) => (
                  <tbody
                    key={item.idMeal}
                    className="bg-white divide-y divide-gray-200 "
                  >
                    {[...Array(20)].map((_, index) => {
                      const ingredient = item[`strIngredient${index + 1}`];
                      const measure = item[`strMeasure${index + 1}`];

                      return ingredient ? (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {ingredient || "NA"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {measure || "NA"}
                          </td>
                        </tr>
                      ) : null;
                    })}
                  </tbody>
                ))}
            </table>
          </div>
        </div>
        <div className="py-4">
          <details className=" border-2 rounded-md px-6 py-4">
            <summary className="text-base text-gray-600 md:text-lg py-4 font-satoshi font-bold">
              Instructions
            </summary>
            <p className="text-base py-4 text-gray-600 md:text-lg  font-satoshi font-normal">
              {data[0].strInstructions || "Instructions Not Available"}
            </p>
          </details>
        </div>
        <div className="py-4 ">
          <p className="font-satoshi py-3 font-regular text-[20px] text-gray-600">
            Video Reference
          </p>
          {data[0]?.strYoutube ? (
            <iframe
              className="w-full flex justify-center lg:h-[500px] rounded-md aspect-video md:aspect-square"
              src={
                data[0]?.strYoutube
                  ? data[0].strYoutube.replace("watch?v=", "embed/")
                  : ""
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <p className="font-satoshi py-3 font-regular text-[20px] text-gray-600">
              Video Reference Not Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualRecipess;
