"use client";
import React from "react";
import Cards from "../../../components/Cards";
import { useState, useEffect } from "react";
import "../../../globals.css";
import "../../../page.css";

export default function Peintures() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/collections")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const productCards = images.map((collection) => (
    <div
      key={collection._id}
      className="flex flex-col justify-center items-center mt-4 mb-4 lg:flex-row lg:w-full lg:justify-around lg:gap-8"
    >
      {collection.images.map((image) => {
        return <Cards key={image._id} {...image} />;
      })}
    </div>
  ));

  return (
    <main className="flex flex-col justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center lg:w-4/5 lg:mx-auto ">
        {productCards}
      </div>
    </main>
  );
}
