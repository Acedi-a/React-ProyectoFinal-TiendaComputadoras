import 'flowbite/dist/flowbite.css';
import './index.css';
import './App.css'
import Categoria from "./components/Categoria.jsx";
import Carrusel from "./components/Carrousel.jsx";
import ProductosDestacados from "./components/ProductosDestacados.jsx";
import Review from "./components/Review.jsx";
import {NavLink} from "react-router-dom";
import CarrouselMarcas from "./components/CarrouselMarcas.jsx";
import qr from "../public/qr.png"

function App() {
    return (
        <>
            <div className="App sm:w-auto">
                <Carrusel/>
                <div className="home-categoria  mx-5 mt-10 sm:w-auto ">
                    <h2 className="pl-10 text-2xl font-bold">Categorias destacadas</h2>
                    <div className="flex justify-center text-center items-center">
                        <Categoria/>
                    </div>
                </div>

                <div className=" flex flex-col mx-10 mt-10 pt-10 mb-10">
                    <h2 className="pl-5 text-2xl font-bold">Productos destacados</h2>
                    <ProductosDestacados/>
                    <NavLink to="/productos" className=" text-center pt-5 mt-10 text-purple-700" href="#">Ver mas
                        productos</NavLink>
                </div>

                <div className="mx-10 pt-10 w-full overflow-hidden" style={{marginBottom: "150px"}}>
                    <h2 className="pl-5 text-2xl font-bold">Reseñas de nuestros clientes</h2>
                    <Review/>
                </div>

                <div className="mx-10 pt-10 w-full overflow-hidden" style={{marginBottom: "150px"}}>
                    <h2 className="pl-5 text-2xl mb-5 font-bold">Nuestras marcas</h2>
                    <CarrouselMarcas/>
                </div>

                <div className="flex flex-col justify-center text-center items-center w-full overflow-hidden" style={{marginBottom: "150px"}}>
                    <h2 className="pl-5 text-3xl mb-5 font-bold">Si te ha gustado mi web porfavor puntualo aqui</h2>
                    <div className="p-5 flex justify-center items-center  ">
                        <img src={qr} alt="qr" style={{width: "600px"}}/>
                    </div>
                </div>


            </div>
        </>

    )
}

export default App;