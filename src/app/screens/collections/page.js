"use client";
import { useState, useEffect } from "react";
import "../../page.css";
import ProductCard from "../../components/ProductCard";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  addArticlesToStore,
  addArticlesToIsLiked,
  removeArticleFromLiked,
} from "../../reducers/CartContext";
import BackgroundCollections from "../../components/BackgroundCollections";

export default function Collections() {
  const article = useSelector((state) => state.articles.value);
  const [images, setImages] = useState([]);
  const likedArticles = useSelector((state) => state.articles.isLiked) || [];
  console.log("Liked Articles:", likedArticles);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBasket = (image) => {
    const isCardAdded = article.some((article) => article?._id === image?._id);
    if (!isCardAdded) {
      dispatch(addArticlesToStore(image));
    }
  };

  const handleClick = (id) => {
    router.push(`/screens/collections/peintures/${id}`);
    console.log("ID cliqué :", id);
  };
  const handleLike = (image, newIsLiked) => {
    if (newIsLiked) {
      dispatch(addArticlesToIsLiked(image));
    } else {
      dispatch(removeArticleFromLiked(image._id));
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/collections")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const productCards = images.map((image) => (
    <ProductCard
      key={image._id}
      image={image}
      handleClick={handleClick}
      handleAddToBasket={() => handleAddToBasket(image)}
      handleLike={handleLike}
      isLikedInitially={likedArticles.some(
        (article) => article._id === image._id
      )}
      isInCart={article.some((article) => article._id === image._id)}
    />
  ));

  return (
    <main className="flex flex-col justify-center md:flex-row md:min-h-screen ">
      <div className="flex flex-col  md:flex-col md:w-full">
        <BackgroundCollections images={images} />
        <div className="flex flex-col items-center mt-10 mb-10 gap-10 md:flex-row md:flex-wrap md:mx-14  md:p-5 md:justify-center">
          {productCards}
        </div>
      </div>
    </main>
  );
}
