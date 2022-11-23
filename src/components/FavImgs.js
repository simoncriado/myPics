// Components
import { Loader } from "../components/Loader";

// This component gets all favorite images, filters them and creates an image card for each one
export const FavImgs = ({ openModal, deleteFavorite, filteredImages }) => {
  return (
    <div className="gap-4 m-4 columns-1 ss:columns-2 lg:columns-3">
      {filteredImages ? (
        filteredImages.map((img) => {
          return (
            <div key={img.id} className="mb-4 rounded shadow-md relative">
              <img
                className="w-full aspect-auto rounded"
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
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};
