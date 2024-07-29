"use client";
import { useState, useEffect, useContext } from "react";
import styles from "../../css/cards.module.css";
import ProductCard from "../../components/ProductCard";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addArticlesToStore } from "@/app/reducers/CartContext";

export default function Collections() {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBasket = () => {
    dispatch(addArticlesToStore(images));
  };
  const handleClick = () => {
    router.push("/screens/collections/peintures");
  };

  useEffect(() => {
    fetch("http://localhost:3001/collections")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const productCards = images.map((image) => (
    <ProductCard
      key={image._id}
      {...image}
      handleClick={handleClick}
      handleAddToBasket={handleAddToBasket}
    />
  ));

  return (
    <main className="flex flex-col justify-center items-center min-h-screen md:flex-row">
      <div className="flex flex-col md:flex-row">{productCards}</div>
    </main>
  );
}
