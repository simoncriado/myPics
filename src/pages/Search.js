// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { fetchPhotos } from "../features/search/searchSlice";
import { addFav } from "../features/favs/favsSlice";

// Components
import { Loader } from "../components/Loader";
import { SearchedImg } from "../components/SearchedImg";
import { SearchForm } from "../components/SearchForm";

// Search page where the user can search specific images or random ones
const Search = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

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

  // To be used when a new img is added to favs to get the actual date and time
  const getActualDateAndTime = () => {
    const date = new Date();
    const day = date.toLocaleDateString();
    const time = date.toLocaleTimeString();
    return `${day}, ${time}`;
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
        date: getActualDateAndTime(),
      })
    );
  };

  return (
    <div className="min-h-full">
      <SearchForm handleSubmit={handleSubmit} setQuery={setQuery} />
      {loading ? <Loader /> : <SearchedImg markAsFav={markAsFav} />}
    </div>
  );
};

export default Search;
