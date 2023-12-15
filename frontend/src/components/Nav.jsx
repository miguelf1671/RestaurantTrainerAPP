import "/src/index.css";
import calendarImage from "../assets/calendar.png"; // Assuming the image is in the 'src/assets' folder
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={calendarImage} className="h-8" alt="Flowbite Logo" />
        <NavLink to="/">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TrainWithMe
          </span>
        </NavLink>
        {/* </a> */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {user ? (
              <>
                <li>
                  <NavLink to="/dashboard">
                    <p className="block py-2 px-3 text-sky-500 rounded md:bg-transparent md:text-sky-500 md:p-0 dark:text-white md:dark:text-cyan-400">
                      Dashboard
                    </p>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/" onClick={handleLogout}>
                    <p className="block py-2 px-3 text-sky-500 rounded md:bg-transparent md:text-sky-500 md:p-0 dark:text-white md:dark:text-cyan-400">
                      Logout
                    </p>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard">
                    <p className="block py-2 px-3 text-sky-500 rounded md:bg-transparent md:text-sky-500 md:p-0 dark:text-white md:dark:text-cyan-400">
                      Dashboard
                    </p>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
