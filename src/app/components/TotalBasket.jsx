import React from "react";

export default function totalBasket(props) {


    return <div>

        <h1 className="text-xl font-mono mt-10 text-center">Basket</h1>

        <h2 className="text-xl font-mono mt-10 mb-5 text-center">
        total basket : {props?.totalPrice} €
        </h2>

        <hr/>

        <div className="flex justify-center mt-10 mb-5">
            <button className="btn btn-primary w-80">Payement</button>
        </div>

        </div>;
}