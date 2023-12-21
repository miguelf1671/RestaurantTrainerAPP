import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import calendar1Image from "../assets/calendar1.png";
import menuImage from "../assets/menu.png";
import drinkImage from "../assets/drink.png";
import tutorialImage from "../assets/tutorial.png";
import boyImage from "../assets/boy.png";

function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);
  // const position = userInfo ? userInfo.position || "No Position specified" : "";

  console.log(userInfo);

  return (
    <div className="bg-blue-500 min-h-screen   justify-start items-center pr-2 pl-2">
      <div className="bg-sky-100 rounded border-black border-2 p-4 mb-4">
        <img className="w-16 h-auto" src={boyImage} alt="" />
        <h1 className=" text-xl uppercase">
          Welcome, {userInfo.first_name} {userInfo.last_name}
        </h1>
        <h2 className="font-sans text-sm">Email: {userInfo.email}</h2>
        <h3 className="text-base">Position: Server</h3>
      </div>
      <div className=" grid lg:grid-cols-4  gap-4 sm:grid-cols-1 justify-items-center mt-10">
        <NavLink to={"/training-schedule"}>
          <div className=" border border-black bg-white  hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-75 transition duration-200 delay-5300 max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
              src={calendar1Image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Training schedule</div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/food-descriptions"}>
          <div className="border border-black bg-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-75 transition duration-200 delay-5300 max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
              src={menuImage}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Food Descriptions</div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </NavLink>

        <div className="border border-black bg-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-75 transition duration-200 delay-5300 max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
          <img
            className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
            src={drinkImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-lg mb-2">Drinks Descriptions</div>
            <p className="text-gray-700 text-base"></p>
          </div>
        </div>
        <NavLink
          to={
            "https://www.nyc.gov/site/cchr/law/sexual-harassment-training.page"
          }
        >
          <div className="border border-black bg-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-75 transition duration-200 delay-5300 max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
              src={tutorialImage}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">
                Sexual Harassment <br /> Training
              </div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
export default Dashboard;
