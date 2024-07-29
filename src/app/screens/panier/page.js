"use client";
import React from "react";
import "../../page.css";
import BasketCards from "../../components/BasketCards";
import TotalBasket from "../../components/TotalBasket";
import { useSelector, useDispatch } from "react-redux";
import { removeArticlesToStore } from "@/app/reducers/CartContext";

export default function Panier() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.value);
  const price = articles?.[0]?.[0].price;

  const totalPrice = price * articles.length || 0;

  const removeArticle = (id) => {
    console.log(articles);
    dispatch(removeArticlesToStore(id));
  };

  const basketCards = articles.map((article) => (
    <BasketCards
      key={article?.[0]?._id}
      {...article}
      removeArticle={removeArticle}
    />
  ));

  return (
    <main>
      <div className="flex justify-center">
        <h1 className="text-3xl font-mono mt-10">Panier</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-evenly justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap md:w-2/4 gap-10 mt-10  ">
          {basketCards.length > 0 ? (
            basketCards
          ) : (
            <div>
              <h1 className="text-3xl font-mono mt-10">Panier Vide</h1>
            </div>
          )}
        </div>
        <div className="flex justify-center md:justify-center md:w-2/5 md:items-center">
          <TotalBasket totalPrice={totalPrice} />
        </div>
      </div>
    </main>
  );
}
