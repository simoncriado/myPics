const Home = () => {
  return (
    <div>
      <div className="py-64 px-20 max-w-sm bg-white rounded-lg  shadow-md dark:bg-bgColor">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            myPics App
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here you will be able to search pictures, add the ones you like to
          your favorites and download them in high quality
        </p>
        {/* BE CAREFUL HERE: when following this link the navBar does not recognise the click and does not change the active state to search */}
        <a
          href="/search"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-mainColor dark:hover:bg-lightViolet dark:focus:ring-blue-800"
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
        </a>
      </div>
    </div>
  );
};

export default Home;
