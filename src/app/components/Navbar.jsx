'use client';
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter(); 
  const count = useSelector((state) => state.articles.value);
  const price = count?.[0]?.price;
  const totalPrice = price * count.length || 0;

  const handleClick = () => {
    router.push("/screens/collections");
  };

  const goToPanier = () => {
    router.push("/screens/panier");
  };

  const goToCollections = () => {
    router.push("/screens/collections");
  };

    return (
        <div className="navbar bg-slate-800 shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" onClick={handleClick}>My ArtHist</a>
  </div>
  <div className="flex gap-2 mr-2 md:mr-10 md:gap-10">
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" bg-slate-800">
        <div className="indicator">
          <button className="btn btn-ghost btn-md">Designs</button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className=" bg-slate-800">
        <div className="indicator">
          <button className="btn btn-ghost btn-md" onClick={goToCollections}>Collections</button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{count.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{count.length} Items</span>
          <span className="text-info">Subtotal: ${totalPrice}</span>
          <div className="card-actions" onClick={goToPanier}>
            <button className="btn btn-primary btn-block" >View cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
    )
}