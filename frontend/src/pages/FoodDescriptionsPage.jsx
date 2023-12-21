import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import boyImage from "../assets/boy.png";

function FoodDescriptionsPage() {
  const { userInfo } = useSelector((state) => state.auth);

  const [pickCategory, setPickCategory] = useState("");

  return (
    <div className="bg-blue-500 min-h-screen pt- pb-10 pl-2 pr-2   justify-start items-center">
      <div className="bg-sky-100 rounded border-black border-2 p-4 mb-4">
        <img className="w-16 h-auto" src={boyImage} alt="" />
        <h1 className="uppercase text-xl">
          {userInfo.first_name} {userInfo.last_name}
        </h1>

        <h3 className="text-base">Position: Server</h3>
      </div>
      <div>
        <NavLink className="flex justify-center" to={"/dashboard"}>
          <button className=" dark:bg-gray-900 text-sky-400 rounded px-2 py-2 mr-6 mt-3  hover:bg-gray-700 font-semibold">
            Back to Dashboard
          </button>
        </NavLink>
        <h1 className="flex justify-center font-mono text-2xl mb-5 mt-10">
          Categories
        </h1>
        <div className="flex justify-center mt-10 ">
          <div className="sm:w-32 md:w-32  lg:w-1/2  text-center text-sm font-medium  bg-black border p-0.5 border-black rounded-lg  ">
            <a
              href="/apps"
              aria-current="true"
              className="block w-full px-2 py-2 text-3xl dark:bg-gray-900 text-sky-400 rounded  mr-6 mt-3  hover:bg-gray-700 font-semibold border-b border-black  rounded-t-lg cursor-pointer"
            >
              Appetizers
            </a>

            <a
              href="/entrees"
              className="block w-full text-3xl px-4 py-2 border-b border-black cursor-pointer dark:bg-gray-900 text-sky-400 rounded mr-6 mt-3  hover:bg-gray-700 font-semibold "
            >
              Entrees
            </a>
            <a className="block w-full text-3xl px-4 py-2 rounded-b-lg cursor-pointer dark:bg-gray-900 text-sky-400 rounded mr-6 mt-3  hover:bg-gray-700 font-semibold">
              Dessert
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDescriptionsPage;
