import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Utiliser un objet pour l'utilisateur connecté
  token: null, // Stocker le token d'authentification ici
  status: "idle", // Statut de l'état de connexion
  error: null, // Stocker les erreurs
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // Action pour connecter un utilisateur
    loginUser: (state, action) => {
      state.user = {
        token: action.payload.token,
        username: action.payload.username,
      };
      state.token = action.payload.token; // Stocke le token d'authentification
      state.status = "succeeded"; // Connexion réussie
    },
    // Action pour déconnecter l'utilisateur
    logoutUser: (state) => {
      state.user = null; // Réinitialise l'utilisateur
      state.token = null; // Réinitialise le token
      state.status = "idle"; // Réinitialise le statut
      state.error = null; // Réinitialise l'erreur
    },
    // Gestion des erreurs
    loginUserFailed: (state, action) => {
      state.status = "failed";
      state.error = action.payload; // Stocke les erreurs de connexion
    },
  },
});

export const { loginUser, logoutUser, loginUserFailed } = loginSlice.actions;
export default loginSlice.reducer;
