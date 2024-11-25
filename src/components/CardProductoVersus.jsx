import React from 'react';
import {  Check, X, ChevronRight } from 'lucide-react';
import StarRating from "./Rating.jsx";

const CardProductoVersus = ({ producto }) => {
    if (!producto || Object.keys(producto).length === 0) {
        return (
            <div className="h-96 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Selecciona un producto</p>
            </div>
        );
    }


    return (
        <div className="bg-white rounded-xl overflow-hidden">
            <div className="relative">
                <div className="aspect-[4/3] flex justify-center text-center items-center bg-gray-100">
                    <img
                        src={producto.image || "/api/placeholder/400/300"}
                        alt={producto.name}
                        className="w-fit h-full object-cover"
                    />
                </div>
                <div className="absolute top-4 right-4">
                    <div className="px-4 py-2 bg-blue-500 rounded-full text-white  shadow-lg">
                        {producto.price} Bs.
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="flex items-center  justify-around ">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 ">
                            {producto.name}
                        </h3>
                    </div>

                    <div className="flex items-center gap-2">
                        <StarRating rating={producto.rating} totalStars={5} />
                        <span>({producto.rating})</span>
                    </div>
                </div>

                <div className="space-y-4 ">
                    {Object.entries(producto.specs).map(([key, value]) => (
                        <div key={key} className=" flex items-center  justify-center gap-5">
                            <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                            <div className="font-medium  text-gray-900  gap-2">
                                    <p>{value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProductoVersus;