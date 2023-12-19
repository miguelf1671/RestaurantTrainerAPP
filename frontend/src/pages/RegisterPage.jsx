import React, { useEffect, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

// import { BiUser } from "react-icons/bi";

// managing formData with useState and initializing it wirh empty strings
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    position: "",
    password: "",
    re_password: "",
  });

  // make it easier to access
  const { first_name, last_name, email, position, password, re_password } =
    formData;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // useSelector hook to select date from the Redux store
  // extracting from the 'auth' slice in the Redux store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password != re_password) {
      console.log("passwords do not match");
      toast.error("Passwords do not match");
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        position,
        password,
        re_password,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
      toast.success(
        "An activation email has been sent to your email. Please check your emial"
      );
    }
    dispatch(reset());
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <>
      <div className="bg-blue-500  flex justify-center h-screen">
        <div className="text-center px-40" style={{ marginTop: "20vh" }}>
          <h1 className="font-mono font-bold text-2xl hover:underline decoration-wavy decoration-sky-500 flex items-center justify-center">
            Register <FaRegUserCircle className="ml-3" />
          </h1>
          {isLoading && (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}

          <div className="bg-blue-700 p-8 rounded mt-4">
            <form
              onSubmit={handleSubmit}
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
                className="rounded m-4 "
                type="text"
                placeholder="Position"
                name="position"
                onChange={handleChange}
                value={position}
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
              <button
                type="submit"
                className="bg-sky-400 rounded px-1 py-1 mr-6 mt-6 text-sky-700 hover:bg-sky-300 font-semibold"
              >
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
