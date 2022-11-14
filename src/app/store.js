import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import favsReducer from "../features/favs/favsSlice";

// First thing is to create a Store with 2 reducers. Then I pass it to the top level component (index.js) so that all the other components in the app have access to the Store
export const store = configureStore({
  reducer: {
    searchImages: searchReducer,
    favImages: favsReducer,
  },
});
