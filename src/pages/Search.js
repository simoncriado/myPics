// React
import { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, selectImages } from "../features/search/searchSlice";
import { addFav } from "../features/favs/favsSlice";

// Components
import { Loader } from "../components/Loader";
import { SearchedImg } from "../components/SearchedImg";
import { SearchForm } from "../components/SearchForm";
import Pagination from "../components/Pagination";

// Search page where the user can search specific images or random ones
const Search = () => {
  const dispatch = useDispatch();
  const imagesList = useSelector(selectImages);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(10);
  const indexOfLastImage = currentPage * imagesPerPage; // For example: let´s say we have 17 pages. indexOfLastImage = 17 * 10 = 170
  const indexOfFirstImage = indexOfLastImage - imagesPerPage; // Following same example: indexOfFirstImage = 170–10 = 160
  const currentImages = imagesList.slice(indexOfFirstImage, indexOfLastImage); // Images to be displayed on the current page. slice(160,170) will return images from index 160 to 169
  const nPages = Math.ceil(imagesList.length / imagesPerPage);

  // Dispatching the fetch action, reseting the input and displaying the loader. Displaying it hardcoded so that it is visible for 2 seconds
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPhotos({ query: query }));
    document.getElementById("searchForm").reset();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const markAsFav = (id, img) => {
    // Filling the heart icon with red color
    const heart = document.getElementById(id);
    heart.style.fill = "#DC4444";
    // Adding the img to favs in localStorage
    dispatch(
      addFav({
        id: img.id,
        description: img.description,
        width: img.width,
        height: img.height,
        urlFull: img.urls.full,
        urlThumb: img.urls.thumb,
        likes: img.likes,
        date: new Date().toLocaleString(),
        dateToSort: Date.now(),
      })
    );
  };

  return (
    <div className="min-h-full">
      <SearchForm handleSubmit={handleSubmit} setQuery={setQuery} />
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* searchedImg creates an img card for each image it receives. We are passing the images from the current page */}
          <SearchedImg imagesList={currentImages} markAsFav={markAsFav} />
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Search;
