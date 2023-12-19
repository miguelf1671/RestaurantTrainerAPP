import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import scheduleImage from "../assets/schedule.png";
import saladImage from "../assets/salad.png";
import wineglassImage from "../assets/wineglass.png";
import audiobookImage from "../assets/audiobook.png";

function Dashboard() {
  const { userInfo } = useSelector((state) => state.auth);
  // const position = userInfo ? userInfo.position || "No Position specified" : "";

  console.log(userInfo);

  return (
    <div className="bg-blue-500 min-h-screen   justify-start items-center pr-2 pl-2">
      <div className="bg-sky-100 rounded border-white border-4 p-4 mb-4">
        <h1 className="font-mono text-xl">
          Welcome, {userInfo.first_name} {userInfo.last_name}
        </h1>
        <h2 className="font-sans text-sm">Email: {userInfo.email}</h2>
        <h3 className="text-base">Position: Server</h3>
      </div>
      <div className=" justify-center grid grid-cols-2  gap-4 justify-items-center">
        <NavLink to={"/training-schedule"}>
          <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
              src={scheduleImage}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-lg mb-2">Training schedule</div>
              <p className="text-gray-700 text-base"></p>
            </div>
          </div>
        </NavLink>

        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
          <img
            className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
            src={saladImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-lg mb-2">Food Descriptions</div>
            <p className="text-gray-700 text-base"></p>
          </div>
        </div>

        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
          <img
            className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
            src={wineglassImage}
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
          <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-40 lg:w-40 mt-2"
              src={audiobookImage}
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
