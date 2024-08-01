import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  username: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // Action pour connecter l'administrateur
    adminLogin(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
      localStorage.setItem("adminToken", action.payload.token); // Enregistrez le token dans localStorage
    },
    // Action pour déconnecter l'administrateur
    adminLogout(state) {
      state.token = null;
      state.username = null;
      localStorage.removeItem("adminToken"); // Supprimez le token de localStorage
    },
    // Action pour définir uniquement le token
    setAdmin(state, action) {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
  },
});

export const { adminLogin, adminLogout, setAdmin } = adminSlice.actions;

export const checkAdminAuthentication = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/users/checkAdmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setAdmin({ token: data.token, username: data.username })); // Assurez-vous que le backend renvoie aussi le username
    } else {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    console.error("Error:", error);
    dispatch(adminLogout());
  }
};

export default adminSlice.reducer;
