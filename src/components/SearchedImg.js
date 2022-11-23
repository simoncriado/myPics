//React
import React from "react";

// Component that gets a list of images and creates a card for each one. The list is coming after the user searches for images. If the user enters a search input I fetch based on that inupt.
// If the user enters no input I fetch a random list of images.
export const SearchedImg = ({ markAsFav, imagesList }) => {
  return (
    <div className="gap-4 m-4 columns-1 ss:columns-2 lg:columns-3">
      {imagesList.map((img) => {
        return (
          <div key={img.id} className="mb-4 rounded shadow-md relative">
            <img
              className="w-full aspect-auto rounded"
              src={img.urls.full}
              alt={img.alt_description}
            />
            <svg
              id={img.id}
              onClick={() => {
                markAsFav(img.id, img);
              }}
              className="w-8 h-8 text-red-600 absolute bottom-2 right-2 text-lg hover:animate-bounce cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
