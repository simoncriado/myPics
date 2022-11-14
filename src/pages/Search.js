import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { Loader } from "../components/Loader";
import { SearchedImg } from "../components/SearchedImg";
import { fetchPhotos } from "../features/search/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPhotos({ query: query }));
    document.getElementById("searchForm").reset();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const markAsFav = (id) => {
    const heart = document.getElementById(id);
    heart.style.fill = "#DC4444";
  };

  return (
    <div className="min-h-full">
      <form
        id="searchForm"
        className="w-11/12 md:w-6/12 mx-auto my-12"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
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
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 ring-0 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search images..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white absolute right-2.5 bottom-2.5 bg-mainColor hover:bg-lightViolete  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 dark:bg-mainColor dark:hover:bg-lightViolet "
          >
            Search
          </button>
        </div>
      </form>
      {loading ? <Loader /> : <SearchedImg markAsFav={markAsFav} />}
    </div>
  );
};

export default Search;
