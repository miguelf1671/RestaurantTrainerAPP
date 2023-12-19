import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function TrainingSchedulePage() {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <div className="bg-blue-500 min-h-screen pt-10 pb-10 pl-4 pr-4   justify-start items-center">
        <div className="bg-sky-100 rounded border-white border-4 p-4 mb-4">
          <h1 className="font-mono text-xl">
            {userInfo.first_name} {userInfo.last_name}
          </h1>

          <h3 className="text-base">Position: Server</h3>
        </div>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
          <div className="px-4 py-2">
            <h1 className="text-gray-800 font-mono text-2xl uppercase flex justify-center">
              Training schedule
            </h1>
          </div>
          <form className="w-full max-w-sm mx-auto px-4 py-2">
            <div className="flex items-center border-b-2 border-sky-400 py-2"></div>
          </form>
          <ul className="divide-y divide-gray-200 px-4">
            <li className="py-4">
              <div className="flex items-center">
                <input
                  id="todo1"
                  name="todo1"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo1" className="ml-3 block text-gray-900">
                  <span className="text-lg font-mono">DAY 1</span> <br />
                  <span className="text-sm font-light text-gray-500">
                    They'll get familiar with the restaurant, take a tour to
                    understand the layout, and learn about safety rules to
                    ensure a secure working environment. They'll also meet the
                    team and understand the basics of how the restaurant
                    operates.
                  </span>
                </label>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <input
                  id="todo2"
                  name="todo2"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo2" className="ml-3 block text-gray-900">
                  <span className="text-lg font-mono">DAY 2</span> <br />
                  <span className="text-sm font-light text-gray-500">
                    They'll dive deeper into the menu, learning about the
                    dishes, ingredients, and any special features. They'll also
                    start practicing how to take orders and maintain tables,
                    ensuring they're ready to serve guests effectively.
                  </span>
                </label>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <input
                  id="todo3"
                  name="todo3"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo3" className="ml-3 block text-gray-900">
                  <span className="text-lg font-mono">DAY 3</span> <br />
                  <span className="text-sm font-light text-gray-500">
                    They'll focus on beverages, getting to know the wine list,
                    signature cocktails, and other drinks offered. They'll also
                    learn the etiquette of serving drinks and understanding the
                    basics of pairing them with food.
                  </span>
                </label>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <input
                  id="todo3"
                  name="todo3"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo3" className="ml-3 block text-gray-900">
                  <span className="text-lg font-mono">DAY 4</span> <br />
                  <span className="text-sm font-light text-gray-500">
                    They'll explore ways to enhance guests' experience by
                    learning suggestive selling techniques, handling guest
                    inquiries with confidence, and addressing any concerns
                    effectively to ensure guest satisfaction.
                  </span>
                </label>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <input
                  id="todo3"
                  name="todo3"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo3" className="ml-3 block text-gray-900">
                  <span className="text-lg font-mono">DAY 5</span> <br />
                  <span className="text-sm font-light text-gray-500">
                    They'll practice using the restaurant's computer system to
                    take orders, manage bills, and process payments. They'll get
                    comfortable with technology to ensure smooth interactions
                    with guests.
                  </span>
                </label>
              </div>
            </li>
            <li className="py-4">
              <div className="flex items-center">
                <input
                  id="todo3"
                  name="todo3"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo3" className="ml-3 block text-gray-900">
                  <span className="text-lg font-mono">DAY 6</span> <br />
                  <span className="text-sm font-light text-gray-500">
                    They'll shadow an experienced server during a live service
                    shift, applying their learned skills in a real-time setting.
                    This practical experience will allow them to refine their
                    techniques with guidance.
                  </span>
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-5">
          <NavLink to={"/dashboard"}>
            <button className="bg-sky-400 rounded px-1 py-1 mr-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold">
              Back to Dashboard
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default TrainingSchedulePage;
