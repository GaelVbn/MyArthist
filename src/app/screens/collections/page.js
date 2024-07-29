"use client";
import { useState, useEffect, useContext } from "react";
import "../../page.css";
import ProductCard from "../../components/ProductCard";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addArticlesToStore } from "@/app/reducers/CartContext";
import BackgroundCollections from "../../components/BackgroundCollections";

export default function Collections() {
  const [images, setImages] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBasket = () => {
    dispatch(addArticlesToStore(images));
    setIsAdded(true);
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
      isAdded={isAdded}
    />
  ));

  return (
    <main className="flex flex-col justify-center items-center min-h-screen md:flex-row ">
      <div className="flex flex-col  md:flex-col md:w-full md:justify-center">
        <BackgroundCollections images={images} />
        <div className="flex flex-col items-center mt-10 md:flex-row md:w-2/4 md:p-5 md:justify-center">
          {productCards}
        </div>
      </div>
    </main>
  );
}
