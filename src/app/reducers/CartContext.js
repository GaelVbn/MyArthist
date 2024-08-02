import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  isLiked: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticlesToStore: (state, action) => {
      state.value.push(action.payload);
    },

    removeArticlesToStore: (state, action) => {
      state.value = state.value.filter(
        (article) => article?._id !== action.payload
      );
    },

    addArticlesToIsLiked: (state, action) => {
      if (!state.isLiked) {
        state.isLiked = []; // Ensure isLiked is always an array
      }
      state.isLiked.push(action.payload);
    },

    removeArticleFromLiked: (state, action) => {
      if (!state.isLiked) {
        state.isLiked = []; // Ensure isLiked is always an array
      }
      state.isLiked = state.isLiked.filter(
        (article) => article?._id !== action.payload
      );
    },
  },
});

export const {
  addArticlesToStore,
  removeArticlesToStore,
  addArticlesToIsLiked,
  removeArticleFromLiked,
} = articlesSlice.actions;
export default articlesSlice.reducer;
