// src/app/screens/collections/peintures/page.js
"use client";
import React, { useState, useEffect } from "react";
import Cards from "../../../../components/Cards";
import "../../../../page.css";
import { useParams } from "next/navigation"; // Import de useParams

export default function Peintures() {
  const [images, setImages] = useState([]);
  const { id } = useParams(); // Récupère l'ID de l'URL

  console.log(images);
  useEffect(() => {
    fetch(`http://localhost:3001/collections/${id}`)
      .then((response) => response.json())
      .then((data) => setImages(data.images));
  }, [id]);

  const productCards = images.map((image) => (
    <Cards key={image._id} {...image} />
  ));

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col items-center my-10 gap-10 md:flex-row  md:p-5 md:justify-start lg:w-4/5 lg:mx-auto">
        {productCards}
      </div>
    </main>
  );
}
