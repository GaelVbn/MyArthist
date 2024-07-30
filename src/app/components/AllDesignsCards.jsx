import React from "react";

export default function AllDesignsCards(props) {
  return (
    
    <div className=" w-80 p-3 bg-white rounded-lg shadow-md mb-4">
      <div className="img_container bg-bgGray rounded-lg">
        <img src={props.imageUrl} alt={props.title} width={1563} height={1563} />
      </div>
      <div className="product_info mt-2">
        <h5 className="text-xl font-semibold">{props.title}</h5>
        <p className="mt-1 text-slate-400">{props.description}</p>
      </div>
    </div>
  );
}
