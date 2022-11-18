// React Router
import { Link } from "react-router-dom";

// Components
import { Slider } from "../components/Slider";

// Home page which includes the image auto slider
const Home = () => {
  return (
    <div className="container flex flex-col flex-wrap justify-between items-center mx-auto my-20 md:flex-row md:my-40">
      <div className="flex-1 py-auto p-6 xl:pl-40">
        <div className="shadow-none max-w-sm rounded-lg shadow-md bg-bgColor">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100">
              myPics App
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-400">
            Here you will be able to search pictures, add the ones you like to
            your favorites and download them in high quality
          </p>
          <Link
            to="/search"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-100 bg-mainColor rounded-lg hover:bg-lightViolet hover:text-gray-800"
          >
            Start searching
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Home;
