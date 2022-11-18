// React
import React, { useEffect, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteFav, editFavDescription } from "../features/favs/favsSlice";

// Components
import { FavImgs } from "../components/FavImgs";
import { SearchFavs } from "../components/SearchFavs";
import { Modal } from "../components/Modal";
import { Dropdown } from "../components/Dropdown";
import Pagination from "../components/Pagination";

// File saver
import { saveAs } from "file-saver";
import Chips from "../components/Chips";

// myFavs page where the user favourite images are displayed
const MyFavs = () => {
  // State with all favourite images
  const { favImages } = useSelector((state) => state.favImages);
  const dispatch = useDispatch();
  // State to open/close the modal and to know for which img the modal is being opened
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  // Search and filters
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Date");
  const [activeChip, setActiveChip] = useState([]);
  const [filteredImages, setFilteredImages] = useState(favImages);

  // My favourite images filtering functions
  useEffect(() => {
    // Filtering by search input
    let filteredImgs;
    if (query.length) {
      filteredImgs = favImages.filter(
        (img) =>
          img.description &&
          img.description.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      filteredImgs = favImages;
    }
    setFilteredImages(filteredImgs);

    // Filtering by dropdown selection based on the filtered by search input array (in case the user used the search bar)
    const orderedImgs = [...filteredImgs];
    switch (activeFilter) {
      case "Date":
        orderedImgs.sort((a, b) => b.dateToSort - a.dateToSort);
        break;
      case "Width":
        orderedImgs.sort((a, b) => b.width - a.width);
        break;
      case "Height":
        orderedImgs.sort((a, b) => b.height - a.height);
        break;
      case "Likes":
        orderedImgs.sort((a, b) => b.likes - a.likes);
        break;
      default:
        break;
    }
    setFilteredImages(orderedImgs);

    let chipImgs = orderedImgs.filter((img) => {
      return Object.values(img.tags).some((tag) => {
        return Object.values(activeChip).includes(tag.title);
      });
    });

    if (chipImgs.length) {
      setFilteredImages(chipImgs);
    }
  }, [query, activeFilter, favImages, activeChip]);

  // Variables for the pagination component
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(6);
  const indexOfLastImage = currentPage * imagesPerPage; // For example: let´s say we have 17 pages. indexOfLastImage = 17 * 6 = 102
  const indexOfFirstImage = indexOfLastImage - imagesPerPage; // Following same example: indexOfFirstImage = 102–6 = 96
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  ); // Images to be displayed on the current page. slice(96, 102) will return images from index 96 to 101
  const nPages = Math.ceil(filteredImages.length / imagesPerPage);

  // Calling the delete action with the img´s ID
  const deleteFavorite = (id) => {
    dispatch(deleteFav(id));
  };

  // Modal functions
  const openModal = (img) => {
    setIsModalOpen(true);
    setModalImg(img);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveEdit = (id, editedDescription) => {
    dispatch(editFavDescription({ id: id, description: editedDescription }));
  };

  const downloadFav = (url, id) => {
    saveAs(url, `${id}.jpeg`);
  };

  return (
    <div
      className="min-h-full"
      onKeyUp={(e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      }}
    >
      {isModalOpen ? (
        <Modal
          modalImg={modalImg}
          saveEdit={saveEdit}
          downloadFav={downloadFav}
          closeModal={closeModal}
        />
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-around">
            <SearchFavs setQuery={setQuery} />
            <Dropdown
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
          <Chips
            filteredImages={filteredImages}
            activeChip={activeChip}
            setActiveChip={setActiveChip}
          />
          <FavImgs
            openModal={openModal}
            deleteFavorite={deleteFavorite}
            filteredImages={currentImages}
          />
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentImages={currentImages}
          />
        </>
      )}
    </div>
  );
};

export default MyFavs;
