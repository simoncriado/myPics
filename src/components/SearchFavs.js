// React
import React from "react";

// Search form to search through the user favourites by description
export const SearchFavs = ({ setQuery }) => {
  return (
    <form
      id="searchForm"
      className="w-11/12 md:w-1/3 mx-auto mt-12 mb-2 md:my-12"
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
          placeholder="Search by description..."
          onChange={(e) => {
            e.preventDefault();
            setQuery(e.target.value);
          }}
        />
      </div>
    </form>
  );
};
