import React from "react";
import { FaUserCheck } from "react-icons/fa";

function ActivatePage() {
  return (
    <div className="bg-blue-500 flex justify-center items-center h-screen">
      <div className="text-center" style={{ marginTop: "1vh" }}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-mono font-bold text-2xl hover:underline decoration-wavy decoration-sky-500 flex items-center justify-center">
              Activate Account <FaUserCheck className="ml-3" />
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <button
                  type="submit"
                  //   onClick={handleSubmit}
                  className="bg-red-400 text-2xl rounded px-4 py-4 mr-6 mt-4 text-sky-700 hover:bg-sky-300 font-semibold"
                >
                  Activate Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivatePage;
