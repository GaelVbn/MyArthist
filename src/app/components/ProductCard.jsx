"use client";
import React from "react";

export default function ProductCard(props) {


    return (
        <div className=' w-80 p-3 bg-white rounded-lg shadow-md' >

            <div className="img_container bg-bgGray rounded-lg">
                <img src={props.imageUrl} alt="Monet" width={1563} height={1563}/>
            </div>


            <div className="product_info mt-2">
                <h5 className="text-xl font-semibold">{props.title}</h5>
                <p className="mt-1 text-slate-400">{props.description}</p>
                <span className="mt-4 font-bold text-lg">$ {props.price}</span>
                <div className="flex flex-row justify-center ml-9">
                <button className="relative flex flex-row text-xl bg-slate-700 text-white rounded-full p-2 px-4 " onClick={props.handleClick}>See More</button>
                <div className="ml-10">
                {props.isAdded ? 
                (<button className="relative flex flex-row  text-xl bg-sky-600 text-white rounded-full p-2 px-4 " disabled>
                 Ajouté !
                </button>) : 
                (<button className="relative flex flex-row  text-xl bg-slate-700 text-white rounded-full p-2 px-4 hover:bg-rose-400" onClick={props.handleAddToBasket}>+</button> )}
                </div>
                </div>
            </div>

        </div> 
    );
}
