// React
import React, { useEffect, useState } from "react";

// Components
import { Loader } from "../components/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// This component gets all favorite images, filters them and creates an image card for each one
export const FavImgs = ({ openModal, deleteFavorite, filteredImages }) => {
  const [icons, setIcons] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIcons(true);
    }, 1500);
  }, []);

  const notify = () => toast("Pic deleted from your Favs!");

  return (
    <div className="gap-4 m-4 columns-1 ss:columns-2 lg:columns-3">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {filteredImages ? (
        filteredImages.map((img) => {
          return (
            <div key={img.id} className="mb-4 rounded shadow-md relative">
              <img
                className="w-full aspect-auto rounded"
                src={img.urlFull}
                alt={img.description}
              />
              {icons ? (
                <>
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
                      notify();
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                </>
              ) : null}
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};
