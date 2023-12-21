import React from "react";
import { NavLink } from "react-router-dom";
import saladImage from "../assets/salad.jpg";
import avocadoImage from "../assets/avocado.jpg";
import brusselsImage from "../assets/brussels.jpg";
import burrataImage from "../assets/burrata.jpg";

function Appetizers() {
  return (
    <div className="bg-blue-500 min-h-screen pt- pb-10 pl-2 pr-2 flex justify-center">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2  space-x-1">
        <div class="max-w-sm pt-4 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <img
            class="ml-16 flex justify-center rounded-t-lg w-64 h-auto"
            src={saladImage}
            alt=""
          />

          <div class="p-5 ">
            <a>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Greek Salad
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ingredients: Tomatoes, Cucumbers, Red, onions, Green, bell,
              peppers, Kalamata, olives, Feta cheese, Olive oil, Red wine
              vinegar, Dried oregano, Salt and pepper
            </p>
            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-900 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none ">
              #GluttenFree
            </p>
            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none ">
              #Dairy
            </p>
          </div>
        </div>
        <div class="max-w-sm pt-4 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-">
          <img
            class="flex justify-center ml-16 rounded-t-lg w-64 h-auto"
            src={avocadoImage}
            alt=""
          />

          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Avocado Toast
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ingredients: Ripe avocados, Bread slices, Lemon juice, Salt and
              pepper
            </p>
            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-yellow-900 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none ">
              #GluttenFree
            </p>
          </div>
        </div>
        <div class="max-w-sm pt-4 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-">
          <img
            class="flex justify-center ml-16 rounded-t-lg w-64 h-auto"
            src={brusselsImage}
            alt=""
          />

          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Crispy Broccoli
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ingredients: Crispy Broccoli, sesame seeds, sweet and spicy ving.
            </p>
            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none ">
              #sesameseeds
            </p>
          </div>
        </div>
        <div class="max-w-sm pt-4 mt-2 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-">
          <img
            class="flex justify-center ml-16 rounded-t-lg w-64 h-auto"
            src={burrataImage}
            alt=""
          />

          <div class="p-5">
            <p>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Burrata platter
              </h5>
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Ingredients: Burrata, Olive Oil, Toast, Heirloom Tomatoes, Green
              Salsa.
            </p>
            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none">
              #Dairy
            </p>
            <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-900 rounded-lg hover:bg-yellow-700 focus:ring-4 focus:outline-none ">
              #Glutten
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appetizers;
