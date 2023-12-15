import React from "react";
import Spinner from "../components/Spinner";

const NotFoundPage = () => {
  return (
    <>
      <div className="bg-blue-500 flex justify-center items-center h-screen">
        <div className="text-center" style={{ marginTop: "1vh" }}>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-mono font-bold leading-9 tracking-tight text-gray-900">
                404: PAGE NOT FOUND
              </h2>
            </div>

            <div
              role="status"
              className="flex justify-center items-center mt-4"
            >
              <Spinner />
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <a href="http://localhost:5173/">
                <button className="bg-sky-400 rounded px-1 py-1 mr-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold">
                  Back To Home
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
