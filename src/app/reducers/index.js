import { combineReducers } from "@reduxjs/toolkit";
import articles from "./CartContext";
import login from "./Login";
import admin from "./admin";

const rootReducer = combineReducers({
  articles,
  login,
  admin,
});

export default rootReducer;
