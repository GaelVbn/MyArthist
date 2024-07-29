"use client";
import { useState, useEffect } from "react";
import "../../page.css";
import ProductCard from "../../components/ProductCard";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addArticlesToStore } from "@/app/reducers/CartContext";
import BackgroundCollections from "../../components/BackgroundCollections";

export default function Collections() {
  const article = useSelector((state) => state.articles.value);
  const [images, setImages] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    // Vérifie si l'article est déjà dans le panier au chargement du composant
    const isCardAdded = article.some((article) => article?._id === images?._id);
    setIsAdded(isCardAdded);
  }, [article, images]);

  const handleAddToBasket = () => {
    // Vérifie si l'article est déjà dans le panier avant de l'ajouter
    const isCardAdded = article.some((article) => article?._id === images?._id);

    if (!isCardAdded) {
      dispatch(addArticlesToStore(images));
      setIsAdded(true);
    }
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
    <main className="flex flex-col justify-center md:flex-row md:min-h-screen ">
      <div className="flex flex-col  md:flex-col md:w-full">
        <BackgroundCollections images={images} />
        <div className="flex flex-col items-center mt-10 md:flex-row md:w-2/4 md:p-5 md:justify-center">
          {productCards}
        </div>
      </div>
    </main>
  );
}
