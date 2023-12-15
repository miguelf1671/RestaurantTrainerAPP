import React, { useEffect } from "react";
import { FaUserCheck } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activate, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function ActivatePage() {
  const { uid, token } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // useSelector hook to select date from the Redux store
  // extracting from the 'auth' slice in the Redux store
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      uid,
      token,
    };
    dispatch(activate(userData));
    toast.success("Your account has been activated! You can login now.");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/login");
    }
    dispatch(reset());
  }, [isError, isSuccess, navigate, dispatch]);

  return (
    <div className="bg-blue-500 flex justify-center items-center h-screen">
      <div className="text-center" style={{ marginTop: "1vh" }}>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="font-mono font-bold text-2xl hover:underline decoration-wavy decoration-sky-500 flex items-center justify-center">
              Activate Account <FaUserCheck className="ml-3" />
            </h2>
            {isLoading && <Spinner />}
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-red-400 text-2xl rounded px-4 py-4 mr-6 mt-4 text-sky-700 hover:bg-sky-300 font-semibold"
              >
                Activate Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivatePage;
