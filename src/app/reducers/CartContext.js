import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticlesToStore: (state, action) => {
      const articleExists = state.value.some(
        (article) => article?.[0]?._id === action.payload?.[0]?._id
      );
      if (!articleExists) {
        state.value.push(action.payload);
      }
    },

    removeArticlesToStore: (state, action) => {
      state.value = state.value.filter(
        (article) => article?.[0]?._id !== action.payload
      );
    },
  },
});

export const { addArticlesToStore, removeArticlesToStore } =
  articlesSlice.actions;
export default articlesSlice.reducer;
