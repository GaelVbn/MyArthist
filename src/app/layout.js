// src/app/layout.js (ou src/app/RootLayout.js)
"use client";

import "../app/globals.css";
import Navbar from "../app/components/Navbar";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import articles from "../app/reducers/CartContext";
import login from "../app/reducers/Login";
import Footer from "../app/components/Footer";

// Configurez votre store Redux
const store = configureStore({
  reducer: { articles, login },
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html>
        <body>
          <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Provider>
  );
}
