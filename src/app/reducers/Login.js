import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Utiliser un objet pour l'utilisateur connecté
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Action pour connecter un utilisateur
    loginUser: (state, action) => {
      state.user = action.payload; // Stocke les informations de l'utilisateur connecté
    },
    // Action pour déconnecter l'utilisateur
    logoutUser: (state) => {
      state.user = null; // Réinitialise l'utilisateur à null
    },
  },
});

export const { loginUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
