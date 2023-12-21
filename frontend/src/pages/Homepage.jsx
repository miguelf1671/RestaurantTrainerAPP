import React from "react";
import { NavLink } from "react-router-dom";
import videoVideo from "../assets/video.mp4";

function HomePage() {
  return (
    <>
      <div className="bg-blue-500  flex justify-center items-start h-screen">
        <div className="text-center ">
          <div className="relative">
            <video
              className="rounded w-full"
              autoPlay
              loop
              muted
              width="500"
              height="auto"
            >
              <source src={videoVideo} tpye="video/mp4" />
            </video>
            <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border p-4 font-bold text-base sm:text-lg  text-white text-center z-10">
              "Empowering Your Team: Training a New Employee <br /> Made Simple
              and Effortless!"
            </h1>
            <NavLink to="/login">
              <button className="dark:bg-gray-900 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 ml-20 rounded px-2 py-2  text-sky-400 hover:bg-gray-700 font-semibold">
                Login
              </button>
            </NavLink>

            <NavLink to="/register">
              <button className="dark:bg-gray-900 absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2 mr-10 rounded px-2 py-2  text-sky-400 hover:bg-gray-700 font-semibold">
                Sign Up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
