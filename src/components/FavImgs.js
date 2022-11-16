// React
import React, { useEffect, useState } from "react";

// Redux
import { useSelector } from "react-redux";

// This component gets all favorite images, filters them and creates an image card for each one
export const FavImgs = ({ openModal, deleteFavorite, query, activeFilter }) => {
  const { favImages } = useSelector((state) => state.favImages);
  const [filteredImages, setFilteredImages] = useState(favImages);

  // My favourite images filtering functions
  useEffect(() => {
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
  }, [query, activeFilter, favImages]);

  return (
    <div className="flex flex-wrap justify-center items-center h-full mx-0 md:mx-8 z-0">
      {filteredImages.map((img) => {
        return (
          <div
            key={img.id}
            className="w-80 md:w-1/2 lg:w-1/3 h-64 md:h-96 mx-6 my-6 relative overflow-hidden md:transition md:duration-500 rounded shadow-md"
          >
            <img
              className="object-fill w-full h-64 md:h-96 rounded"
              src={img.urlFull}
              alt={img.description}
            />
            <svg
              className="w-8 h-8 text-mainColor absolute bottom-2 left-2 text-lg hover:animate-bounce cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                openModal(img);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <svg
              className="w-8 h-8 text-mainColor absolute bottom-2 right-2 text-lg hover:animate-bounce cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                deleteFavorite(img.id);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              ></path>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
