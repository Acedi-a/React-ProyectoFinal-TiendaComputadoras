import { useState } from 'react'
import 'flowbite/dist/flowbite.css';
import './index.css';
import './App.css'
import Categoria from "./components/Categoria.jsx";
import Carrusel from "./components/Carrousel.jsx";
import ProductosDestacados from "./components/ProductosDestacados.jsx";
import Review from "./components/Review.jsx";
import {NavLink} from "react-router-dom";

function App() {
    return (
        <>
            <div className="App sm:w-auto">
                <Carrusel/>
                <div className="home-categoria mx-5 mt-10 sm:w-auto ">
                    <h2 className="pl-10 text-xl">Categorias destacadas</h2>
                    <Categoria/>
                </div>

                <div className=" flex flex-col mx-10 mt-10 pt-10 mb-10">
                    <h2 className="pl-5 text-xl">Productos destacados</h2>
                    <ProductosDestacados/>
                    <NavLink to="/productos" className=" text-center pt-5 mt-10 text-purple-700" href="#">Ver mas productos</NavLink>
                </div>

                <div className="mx-10 pt-10" style={{marginBottom:"150px"}}>
                    <h2 className="pl-5 text-xl">Reseñas de nuestros clientes</h2>
                    <Review/>
                </div>


            </div>
        </>

    )
}

export default App;