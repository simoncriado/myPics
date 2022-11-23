// React
import React from "react";

// Search form that can fire the handleSubmit function and sets the search query (for fetching images)
export const SearchForm = ({ handleSubmit, setQuery }) => {
  return (
    <>
      <form
        id="searchForm"
        className="w-11/12 md:w-6/12 mx-auto mt-12 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm ring-0 rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
            placeholder="Search images..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="text-white absolute right-2.5 bottom-2.5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-mainColor hover:bg-lightViolet "
          >
            Search
          </button>
        </div>
      </form>
      <p className="text-gray-200 text-sm text-center mb-6">
        You can search without entering a search parameter and then a list of
        random images will be displayed
      </p>
    </>
  );
};
