import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./src/App.jsx";
import Navbar from "./src/components/Navbar.jsx";
import Footer from "./src/components/Footer.jsx";
import Productos from "./src/components/Productos.jsx";
import Error404 from "./src/components/Error404.jsx";
import DetalleProducto from "./src/components/DetalleProducto.jsx";
import { CarritoProvider } from "./src/context/CarritoContext.jsx";
import Carrito from "./src/components/Carrito.jsx";
import Categorico from "./src/components/ProductosCategoricos.jsx";
import PreguntasFrecuentes from "./src/components/PreguntasFrecuentes.jsx";
import Comparaciones from "./src/components/Comparaciones.jsx";

const Rutas = () => {
    return (
        <CarritoProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/productos/:id" element={<DetalleProducto />} />
                    <Route path="/categorico/:categoria" element={<Categorico />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/pcconfig" element={<App />} />
                    <Route path="/perfil" element={<App />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/error404" element={<Error404 />} />
                    <Route path="/faq" element={<PreguntasFrecuentes />} />
                    <Route path="/versus" element={<Comparaciones />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CarritoProvider>
    )
}

export default Rutas;