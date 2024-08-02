"use client";

import React from "react";
import "../../page.css";
import Liked from "../../components/Liked";
import { useSelector } from "react-redux";

export default function IsLiked() {
  const liked = useSelector((state) => state.articles.isLiked);
  console.log(liked);

  const articlesLikes = liked.map((article) => (
    <Liked
      key={article._id}
      imageUrl={article.images[0].imageUrl}
      title={article.name}
      description={article.description}
    />
  ));

  return (
    <main>
      <div>{articlesLikes}</div>;
    </main>
  );
}
