"use client";
import React, { useEffect, useState } from "react";
import { TbBasketHeart } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

export default function ProductCard({ image, handleClick, handleAddToBasket, handleLike, isInCart, isLikedInitially }) {
  const [isAdded, setIsAdded] = useState(isInCart);
  const [isLiked, setIsLiked] = useState(isLikedInitially);

  useEffect(() => {
    setIsAdded(isInCart);
  }, [isInCart]);

  const handleButtonClick = () => {
    handleAddToBasket();
    setIsAdded(true);
  };

  const handleLikeClick = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    handleLike(image, newIsLiked); // Notify parent of the new liked state
  };

  return (
    <div className='w-80 p-3 bg-white rounded-lg shadow-md '>
      <div className="img_container bg-bgGray rounded-lg">
        <img src={image.images[0].imageUrl} alt={image.name} width={1563} height={1563} />
      </div>

      <div className="product_info mt-2">
        <h5 className="text-xl font-semibold">{image.name}</h5>
        <p className="mt-1 text-slate-400">{image.description}</p>
        <span className="mt-4 font-bold text-lg">$ {image.price}</span>

        <div className="flex flex-row justify-between items-center mt-6">
          <button
            className="relative flex flex-row text-xl bg-slate-500 text-white rounded-full p-2 px-4"
            onClick={() => handleClick(image._id)}
            aria-label={`Voir plus d'informations sur ${image.name}`}
          >
            See More
          </button>
          <div className="ml-10">
            {isAdded ? (
              <button
                className="relative flex flex-row text-xl bg-sky-600 text-white rounded-full p-2 px-4"
                disabled
                aria-label="Produit déjà ajouté au panier"
              >
                Ajouté !
              </button>
            ) : (
              <button
                className="relative flex flex-row text-xl bg-slate-500 text-white rounded-full p-3 px-4 hover:bg-rose-400 w-fit"
                onClick={handleButtonClick}
                aria-label={`Ajouter ${image.name} au panier`}
              >
                <TbBasketHeart />
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-row w-full justify-end mt-4 ">
          <span className="text-xl p-3 px-4 " onClick={handleLikeClick}>
            <FaHeart size={24} color={isLiked ? "red" : null} />
          </span>
        </div>
      </div>
    </div>
  );
}
