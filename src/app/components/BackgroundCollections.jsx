'use client'
import Image from "next/image";
import React from "react";

export default function BackgroundCollections(props) {
    return (
<div
  className="md:min-h-9 hero min-h-screen"
  style={{
    backgroundImage: "url('/MONET.jpg')",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">All Designs</button>
    </div>
  </div>
</div>
    )
}