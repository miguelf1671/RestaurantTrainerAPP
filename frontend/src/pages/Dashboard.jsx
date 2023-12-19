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
    <div className="bg-blue-500 min-h-screen   justify-start items-center">
      <div className="bg-sky-100 rounded border-white border-4 p-4 mb-4">
        <h1 className="font-mono text-xl">
          Welcome, {userInfo.first_name} {userInfo.last_name}
        </h1>
        <h2 className="font-sans text-sm">Email: {userInfo.email}</h2>
        <h3 className="text-base">Position: Server</h3>
      </div>
      <div className=" justify-center grid grid-cols-1  gap-4 justify-items-center">
        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
          <img
            className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-64 lg:w-64 mt-2"
            src={scheduleImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
          <img
            className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-64 lg:w-64 mt-2"
            src={saladImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>

        <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
          <img
            className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-64 lg:w-64 mt-2"
            src={wineglassImage}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <NavLink
          to={
            "https://www.nyc.gov/site/cchr/law/sexual-harassment-training.page"
          }
        >
          <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center">
            <img
              className="h-32 w-32 sm:h-32 sm:w-32 md:h-40 md:w-40 lg:h-64 lg:w-64 mt-2"
              src={audiobookImage}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4 text-center">
              <div className="font-bold text-xl mb-2">
                Sexual Harassment Training
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
export default Dashboard;
