// React
import { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { deleteFav, editFavDescription } from "../features/favs/favsSlice";

// Components
import { FavImgs } from "../components/FavImgs";
import { SearchFavs } from "../components/SearchFavs";
import { Modal } from "../components/Modal";
import { Dropdown } from "../components/Dropdown";

// File saver
import { saveAs } from "file-saver";

// myFavs page where the user favourite images are displayed
const MyFavs = () => {
  const dispatch = useDispatch();
  // State to open/close the modal and to know for which img the modal is being opened
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  // Search and filters
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Date");

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
          <FavImgs
            openModal={openModal}
            deleteFavorite={deleteFavorite}
            query={query}
            activeFilter={activeFilter}
          />
        </>
      )}
    </div>
  );
};

export default MyFavs;
