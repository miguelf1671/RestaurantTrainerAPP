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

  const { first_name, last_name, email, password, re_password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(formData);
  };

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
                onChange={handleChange}
                value={first_name}
                required
              />
              <input
                className="rounded m-4"
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={handleChange}
                value={last_name}
                required
              />
              <input
                className="rounded m-4"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />
              <input
                className="rounded m-4"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={password}
                required
              />
              <input
                className="rounded m-4"
                type="password"
                placeholder="Retype Password"
                name="re_password"
                onChange={handleChange}
                value={re_password}
                required
              />
              <button className="bg-sky-400 rounded px-1 py-1 mr-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
