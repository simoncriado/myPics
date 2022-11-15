// React
import React, { useState } from "react";

// Component to display information about the user´s selected image. Possibility to edit the description, download the image and close the modal
export const Modal = ({ modalImg, saveEdit, downloadFav, closeModal }) => {
  const currentImg = modalImg;
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  return (
    <div
      className="relative modal fade mx-auto my-20 w-4/5 md:w-1/2 h-1/2 outline-none overflow-x-hidden overflow-y-auto bg-gray-700 rounded-xl"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-gray-700 bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-500 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-100"
              id="exampleModalLabel"
            >
              Image information
            </h5>
            <svg
              className="w-8 h-8 text-red-600 absolute top-4 right-4 text-lg hover:animate-bounce z-99 cursor-pointer"
              fill="white"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                closeModal();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div className="modal-body relative p-4">
            <div className="relative bg-gray-500 rounded-lg p-2 m-1 text-gray-100">
              <h2>Description:</h2>
              {isEditing ? (
                <input
                  type="text"
                  placeholder="Enter a new description..."
                  onChange={(e) => {
                    setEditedDescription(e.target.value);
                  }}
                />
              ) : (
                <p className="truncate">{currentImg.description}</p>
              )}

              <svg
                className="w-6 h-6 text-blue-700 absolute top-2 right-2 text-lg animate-pulse z-99 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setIsEditing(true);
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </div>
            <div className="bg-gray-500 rounded-lg p-2 m-1 text-gray-100">
              <h2>Width:</h2>
              <p>{currentImg.width}</p>
            </div>
            <div className="bg-gray-500 rounded-lg p-2 m-1 text-gray-100">
              <h2>Height:</h2>
              <p>{currentImg.height}</p>
            </div>
            <div className="bg-gray-500 rounded-lg p-2 m-1 text-gray-100">
              <h2>Likes:</h2>
              <p>{currentImg.likes}</p>
            </div>
            <div className="bg-gray-500 rounded-lg p-2 m-1 text-gray-100">
              <h2>Marked as Fav on:</h2>
              <p>{currentImg.date}</p>
            </div>
          </div>
          <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-500 rounded-b-md">
            <svg
              className="w-8 h-8 text-gray-100 absolute bottom-4 left-4 text-lg hover:animate-bounce z-99 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                downloadFav();
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            <button
              type="button"
              onClick={() => {
                saveEdit(currentImg.id, editedDescription);
                closeModal();
              }}
              className="px-6
      py-2.5
      bg-mainColor
      text-gray-100
      font-medium
      leading-tight
      rounded
      shadow-md
      hover:bg-lightViolet hover:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
