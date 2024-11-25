import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar, faTag} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from "react-router-dom";
import {useCarrito} from "../context/CarritoContext.jsx";
import StarRating from "./Rating.jsx";
import "../css/CardProducto.css"

const ProductCard = ({ name, image, price, specs, rating, id, disc }) => {
    const {agregarAlCarrito} = useCarrito();
    const precioFinal = price - (price * (disc/100));

    const handleAgregarClick = (e) => {
        e.preventDefault();
        agregarAlCarrito({id,name,image,price,specs,disc})
    }

    return (
        <NavLink to={`/productos/${id}`}>
            <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600
                               rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200
                               animate-gradient-xy pointer-events-none"></div>

                <div className=" bg-white shadow-[0_0px_30px_-10px_rgba(0,0,0,0.4)]
                              rounded-lg p-4 flex flex-col group-hover:scale-105
                              transition-transform duration-200">
                    <div className="flex flex-col items-center">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-32 object-contain mb-4"
                        />
                        <h2 className="font-bold text-gray-800" style={{fontSize: "14px"}}>{name}</h2>
                    </div>

                    <div className="mt-4 text-gray-600 text-sm flex-grow text-center">
                        {specs.map((spec, index) => (
                            <p key={index}>{spec}</p>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-row space-x-5">
                        <div className="flex text-center items-center space-x-1">
                            {(disc !== 0) ? <FontAwesomeIcon icon={faTag} style={{color: "#09c820",}} />:""}
                            <p className="text-md font-semibold text-gray-800">{precioFinal} Bs.</p>
                        </div>
                        <div className="flex flex-row">
                            <StarRating totalStars={5} rating={rating}/>
                        </div>
                    </div>

                    <button
                        className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-2xl hover:bg-purple-800"
                        onClick={handleAgregarClick}
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </NavLink>
    );
};

export default ProductCard;