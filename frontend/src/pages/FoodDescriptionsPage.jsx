import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function FoodDescriptionsPage() {
  const { userInfo } = useSelector((state) => state.auth);

  const [pickCategory, setPickCategory] = useState("");

  return (
    <div className="bg-blue-500 min-h-screen pt-10 pb-10 pl-4 pr-4   justify-start items-center">
      <div className="bg-sky-100 rounded border-white border-4 p-4 mb-4">
        <h1 className="font-mono text-xl">
          {userInfo.first_name} {userInfo.last_name}
        </h1>

        <h3 className="text-base">Position: Server</h3>
      </div>
      <h1 className="flex justify-center font-mono text-2xl mb-5 mt-8">
        Categories
      </h1>
      <div className="flex justify-center ">
        <div className="w-64 text-center text-sm font-medium text-gray-900 bg-black border p-0.5 border-black rounded-lg  dark:text-white">
          <a
            href="#"
            aria-current="true"
            className="block w-full px-4 py-2 text-white bg-blue-500 hover:bg-sky-400 border-b border-black  rounded-t-lg cursor-pointer"
          >
            Appetizers
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 border-b border-black cursor-pointer bg-blue-500 hover:bg-sky-400  focus:outline-none focus:ring-2"
          >
            Sides
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 border-b border-black cursor-pointer bg-blue-500 hover:bg-sky-400 "
          >
            Entrees
          </a>
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-b-lg cursor-pointer bg-blue-500 hover:bg-sky-400"
          >
            Dessert
          </a>
        </div>
      </div>
    </div>
  );
}

export default FoodDescriptionsPage;
