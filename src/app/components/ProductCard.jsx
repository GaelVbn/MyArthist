"use client";
import React, { useState, useEffect } from "react";
import { TbBasketHeart } from "react-icons/tb";

export default function ProductCard({ image, handleClick, handleAddToBasket, isInCart }) {
  const [isAdded, setIsAdded] = useState(isInCart);

  useEffect(() => {
    setIsAdded(isInCart);
  }, [isInCart]);

  const handleButtonClick = () => {
    handleAddToBasket();
    setIsAdded(true);
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
        <div className="flex flex-row justify-center ml-9">
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
      </div>
    </div>
  );
}
