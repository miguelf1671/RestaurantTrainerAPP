import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

// import { BiUser } from "react-icons/bi";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  return (
    <>
      <div className="bg-blue-500  flex justify-center h-screen">
        <div className="text-center px-40" style={{ marginTop: "20vh" }}>
          <h1 className="font-mono font-bold text-2xl hover:underline decoration-wavy decoration-sky-500 flex items-center justify-center">
            Register <FaRegUserCircle className="ml-3" />
          </h1>

          <div className="bg-blue-700 p-8 rounded mt-4">
            <form
              action=""
              className="grid p-4 flex items-center justify-center"
            >
              <input
                className="rounded m-4 "
                type="text"
                placeholder="First Name"
                name="first_name"
                required
              />
              <input
                className="rounded m-4"
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
              />
              <input
                className="rounded m-4"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <input
                className="rounded m-4"
                type="password"
                placeholder="Password"
                name="email"
                required
              />
              <input
                className="rounded m-4"
                type="password"
                placeholder="Re-enter Password"
                name="email"
                required
              />
              <button className="bg-sky-400 rounded px-1 py-1 mr-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
