import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Healthy() {


    const strCategory =  "Vegetarian"
    const [data,setData]= useState()
    const [loading,setLoading]= useState(true)
    const [searchTerm, setSearchTerm] = useState("");
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
      
          setData(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [strCategory]);
  
    const filteredHealthyCategory = data?.meals?.filter((item) =>
        item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );

      filteredHealthyCategory?.sort((a, b) =>
        a?.strMeal?.localeCompare(b.strMeal)
      );
    
      const hanleSearch = (e) => {
        setSearchTerm(e.target.value);
      };

    console.log(data)
    if (loading)
      return <p>loading......</p>
  return (
    <div>
  




         <div className="px-4 mb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
   
   
         <div className="w-full flex flex-col lg:flex-row lg:justify-between  py-6">
        <p
          aria-label="Category"
          title="Visit the East"
          className="inline-block py-3 text-xl font-satoshi font-bold text-gray-700 leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
        Healthy Categories
        </p>

        <div>
          <input
            type="Search"
            placeholder="Search by Name..."
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
      {filteredHealthyCategory && filteredHealthyCategory?.length > 0?(

filteredHealthyCategory?.map((item,index)=>(

    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md border-1"
    key={index}
    >
    <img
      src={item?.strMealThumb}
      className="object-cover w-full py-0"
      alt=""
    />
    <div className="p-5 border border-t-0">
     
      <p
     
        aria-label="Category"
        title="Visit the East"
        className="inline-block mb-3 text-xl font-satoshi font-bold text-gray-700 leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
      >
        {item?.strMeal}
      </p>
    
     
      <p className="mb-2 text-gray-600 truncate font-satoshi font-normal">
      {item?.strCategoryDescription}
      </p>
      <Link
        to={`/individualRecipe/${item?.idMeal}`}
        aria-label=""
        className="inline-flex font-satoshi items-center font-semibold text-red-500 transition-colors duration-200  hover:text-deep-purple-800"
      >
        Learn more
      </Link>
    </div>
    </div>
    
            ))
            
           
    



      ):
      (
        <div className="flex justify-center items-center py-6  text-lg font-satoshi text-gray-700">
      Healthy  Category Not Found
      </div>
      )

      }  
    
       
      </div>
    </div>
    </div>
  )
}