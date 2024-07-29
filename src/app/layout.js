// src/app/layout.js (ou src/app/RootLayout.js)
"use client";

import "../app/globals.css";
import Navbar from "../app/components/Navbar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import articles from "../app/reducers/CartContext";

// Configurez votre store Redux
const store = configureStore({
  reducer: { articles }, // Assurez-vous d'utiliser le bon nom de reducer
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html>
        <body>
          <div>
            <Navbar />
            <main>{children}</main>
          </div>
        </body>
      </html>
    </Provider>
  );
}
