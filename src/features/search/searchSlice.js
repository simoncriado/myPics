import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",

  async ({ query }) => {
    const API_KEY = "_OSLZtUPSaNQCHE5nx6fSOCWHY9SJwbKbzKQdazThUo";
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${query}&per_page=18&orientation=landscape`;
    const URL_RANDOM_SEARCH = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=18&orientation=landscape`;

    if (query && query !== "") {
      const response = await fetch(URL);
      const data = await response.json();
      return [...data.results];
    } else {
      const response = await fetch(URL_RANDOM_SEARCH);
      const data = await response.json();
      return [...data];
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    isLoading: false,
    photos: [],
  },
  extraReducers: {
    [fetchPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPhotos.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.photos = action.payload;
    },
    [fetchPhotos.rejected]: (state) => {
      state.isLoading = false;
      console.log("Failure while fetching the requested data!");
    },
  },
});

export default searchSlice.reducer;
export const selectPhotos = (state) => state.searchImages.photos;
export const loading = (state) => state.searchImages.isLoading;
