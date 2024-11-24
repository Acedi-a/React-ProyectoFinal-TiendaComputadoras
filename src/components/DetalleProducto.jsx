// ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../json/Productos.json';
import StarRating from "./Rating.jsx";
import StoreFeature from "./StoreFeature.jsx";
import {faHeadset, faShield, faTools, faTruck, faUserGear} from "@fortawesome/free-solid-svg-icons";
import {useCarrito} from "../context/CarritoContext.jsx";

const DetalleProducto = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {agregarAlCarrito} = useCarrito();


    useEffect(() => {
        const foundProduct = productos.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div className="text-center p-8">Cargando...</div>;
    }

    let PrecioOriginal = null;
    if (product.discount !== 0) {
         PrecioOriginal = (
            <div className="flex gap-2"><p className="text-red-400" style={{
                textDecoration: 'line-through',
                background: 'linear-gradient(to right, white 50%, red 50%)',
                backgroundClip: 'text'
            }}>{product.price}</p><p className="text-sm bg-red-400 h-fit rounded-lg text-white px-2">{product.discount}%</p></div>);
    }else{
         PrecioOriginal = "";
    }


    const handleAgregarClick = (e) => {
        e.preventDefault();
        agregarAlCarrito({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            specs: product.specs,
            disc: product.discount
        });
    };

    const precioFinal = product.price - (product.price * (product.discount / 100));

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                    <div className="mb-4">
                        <div className="text-2xl flex gap-3 font-bold text-purple-600">
                            {PrecioOriginal}
                            {precioFinal} Bs.
                        </div>

                        <div className="flex items-center mt-2">
                            <StarRating rating={product.rating} totalStars={5} />
                            <span className="ml-2 text-gray-600">({product.rating})</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-3">Especificaciones:</h2>
                        <ul className="space-y-2">
                            {product.specs.map((spec, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    {spec}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mt-8">
                        <StoreFeature texto="Envío seguro" icon={faTruck} />
                        <StoreFeature texto="Soporte técnico 24/7" icon={faHeadset} />
                        <StoreFeature texto="Garantía oficial" icon={faShield} />
                        <StoreFeature texto="Instalación gratis" icon={faTools} />
                        <StoreFeature texto="Asesoría experta" icon={faUserGear} />
                    </div>

                    <button
                        className="w-full mt-8 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                        onClick={handleAgregarClick}
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;