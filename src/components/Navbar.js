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
    <nav className="bg-bgColor border-gray-200 px-2 ss:px-4 md:px-10 xl:px-64 py-2.5 rounded h-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link
          onClick={() => {
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
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 "
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
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-bgColor">
            <li>
              <Link
                onClick={() => {
                  // This check avoids the toggle for full screen size. Only when the hamburger menu is shown (width less than 1060px) then the toggle will be activated
                  if (window.innerWidth < 1060) {
                    setToggle(!toggle);
                  }
                  setActive("Home");
                }}
                to="/"
                className={`${
                  active === "Home"
                    ? "block py-2 pr-4 pl-3 text-gray-200 bg-mainColor rounded md:bg-transparent md:text-mainColor font-extrabold md:p-0"
                    : "block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  if (window.innerWidth < 1060) {
                    setToggle(!toggle);
                  }
                  setActive("Search");
                }}
                to="/search"
                className={`${
                  active === "Search"
                    ? "block py-2 pr-4 pl-3 text-gray-200 bg-mainColor rounded md:bg-transparent md:text-mainColor font-extrabold md:p-0"
                    : "block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                }`}
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  if (window.innerWidth < 1060) {
                    setToggle(!toggle);
                  }
                  setActive("myFavs");
                }}
                to="/myFavs"
                className={`${
                  active === "myFavs"
                    ? "block py-2 pr-4 pl-3 text-gray-200 bg-mainColor rounded md:bg-transparent md:text-mainColor font-extrabold md:p-0"
                    : "block py-2 pr-4 pl-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
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
