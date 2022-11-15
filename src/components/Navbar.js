// React and React Router
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Images
import Logo from "../assets/images/logo.png";

// Responsive navBar. Recognizes which page is active and styles it accordingly
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (window.location.toString().includes("search")) {
      setActive("Search");
    } else if (window.location.toString().includes("myFavs")) {
      setActive("myFavs");
    }
  }, []);

  return (
    <nav className="bg-bgColor border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-bgColor h-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          onClick={() => {
            setToggle(!toggle);
            setActive("Home");
          }}
          to="/"
          className="flex items-center"
        >
          <img src={Logo} className="mr-3 h-16 sm:h-16" alt="Logo" />
        </Link>
        <button
          onClick={() => setToggle(!toggle)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${
            !toggle ? "hidden" : ""
          }  z-50 w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Home");
                }}
                to="/"
                className={`${
                  active === "Home"
                    ? "block py-2 pr-4 pl-3 text-white bg-mainColor rounded md:bg-transparent md:text-mainColor font-extrabold md:p-0 dark:text-white"
                    : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Search");
                }}
                to="/search"
                className={`${
                  active === "Search"
                    ? "block py-2 pr-4 pl-3 text-white bg-mainColor rounded md:bg-transparent md:text-mainColor font-extrabold md:p-0 dark:text-white"
                    : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setToggle(!toggle);
                  setActive("myFavs");
                }}
                to="/myFavs"
                className={`${
                  active === "myFavs"
                    ? "block py-2 pr-4 pl-3 text-white bg-mainColor rounded md:bg-transparent md:text-mainColor font-extrabold md:p-0 dark:text-white"
                    : "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }`}
              >
                myFavs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
