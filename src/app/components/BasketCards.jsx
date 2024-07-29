'use client';
import React from "react";

export default function BasketCards(props) {

    return (
        <div className='w-80 p-3 bg-white rounded-lg shadow-md md:flex-row' >

            <div className="img_container bg-bgGray rounded-lg">
                <img src={props?.[0]?.imageUrl} alt="Monet" width={1563} height={1563}/>
            </div>


            <div className="product_info mt-2">
                <h5 className="text-xl font-semibold">{props?.[0]?.name}</h5>
                <p className="mt-1 text-slate-400">{props?.[0]?.description}</p>
                <span className="mt-4 font-bold text-lg">$ {props?.[0]?.price}</span>
                <div className="flex flex-row justify-center ml-20">
                <button className="relative flex flex-row text-xl bg-slate-700 text-white rounded-full p-2 px-4 " >See More</button>
                <div className="ml-10">
                <button className="relative flex flex-row  text-xl text-white p-2 px-4" onClick={() => props.removeArticle(props?.[0]?._id)}>🗑</button>
                </div>
                </div>
            </div>

        </div> 
    )
}