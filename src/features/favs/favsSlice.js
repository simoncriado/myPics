// Redux
import { createSlice } from "@reduxjs/toolkit";

// The first time the initialState will be an empty array (or if the user deletes all favImages)
const initialState = {
  favImages: JSON.parse(localStorage.getItem("favs")) || [],
};

// Adding the favImages to localStore under "favs"
const setLocalStorage = (images) => {
  localStorage.setItem("favs", JSON.stringify(images));
};

export const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    // If the img that the user is trying to add to favs is not yet a fav... it gets added to the state favImages and this gets added to the localStorage
    addFav: (state, action) => {
      if ([...state.favImages].every((obj) => obj.id !== action.payload.id)) {
        state.favImages = [...state.favImages, action.payload];
        setLocalStorage(state.favImages);
      }
    },

    // Filtering the favImages so that only the imgs where the ID is not the same as the one that the user selected are included. The result gets added to the localStorage
    deleteFav: (state, action) => {
      state.favImages = state.favImages.filter(
        (obj) => obj.id !== action.payload
      );
      setLocalStorage(state.favImages);
    },

    // Looping throught all img objects and editing the description from the one where the ID is the same as the ID from the img that the user selected
    editFavDescription: (state, action) => {
      state.favImages = state.favImages.map((obj) => {
        if (obj.id === action.payload.id) {
          obj.description = action.payload.description;
        }
        return obj;
      });
      setLocalStorage(state.favImages);
    },
  },
});

// Exporting the different actions which will be used in the different components
export const { addFav, deleteFav, editFavDescription } = favsSlice.actions;

export default favsSlice.reducer;
