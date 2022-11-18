// React
import React from "react";

// Component that creates a pagination. Each page contains 10 elements.
const Pagination = ({ nPages, currentPage, setCurrentPage, currentImages }) => {
  // Creates an array that holds all the page numbers from 1 to the total number of pages (this variable coming from the parent component)
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  // Goes to next or prev page if the user is not at the last page or first page respectively
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  // This is check is so that if the user is in page more than 1 and performs a search. The user will be redirected to page 1 where the results are shown. Without this check the user would stay in the current page with no results
  // WARNING: cannot update "MyFavs" while rendering "Pagination"...
  // if (currentImages !== undefined && !currentImages.length) {
  //   setCurrentPage(1);
  // }

  return (
    <nav aria-label="Page navigation example relative ">
      <ul className="inline-flex w-full justify-center -space-x-px">
        <li>
          <button
            onClick={prevPage}
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
        {/* Creating a button with the number of the page for each page */}
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className={`${
                currentPage === pgNumber
                  ? "dark:bg-gray-700 text-white"
                  : "dark:bg-gray-800 dark:text-gray-400"
              } px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white`}
            >
              {pgNumber}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={nextPage}
            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
