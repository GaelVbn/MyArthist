"use client";

import React from "react";
import "../../page.css";
import Liked from "../../components/Liked";
import { useSelector, useDispatch } from "react-redux";
import { removeArticleFromLiked } from "@/app/reducers/CartContext";

export default function IsLiked() {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.articles.isLiked);
  console.log(liked);

  //remove from liked
  const onUnlike = (id) => {
    dispatch(removeArticleFromLiked(id));
  };

  const articlesLikes = liked.map((article) => (
    <Liked
      key={article._id}
      imageUrl={article.images[0].imageUrl}
      title={article.name}
      description={article.description}
      onUnlike={() => onUnlike(article._id)}
    />
  ));

  return (
    <main>
      <div>{articlesLikes}</div>;
    </main>
  );
}
