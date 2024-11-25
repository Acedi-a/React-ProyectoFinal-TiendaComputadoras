import { NavLink } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext.jsx";
import { Search, ShoppingCart, User, Home, Monitor, Cpu } from "lucide-react";
import {useState} from "react";

const Navbar = () => {
    const { carrito } = useCarrito();
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    const [inputBuscador, setInputSBuscador] = useState("");

    const onchange = (e) => {
        e.preventDefault();
        setInputSBuscador(e.target.value);
    }

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-white 
        ${isActive ? 'bg-purple-800 shadow-lg' : 'hover:bg-purple-700'}`;

    return (
        <nav className="fixed top-0 w-full z-50 shadow-lg" style={{ backgroundColor: "#79007B" }}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center px-4 py-3">
                    {/* Logo section */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 transition-transform hover:scale-105"
                    >
                        <h2 className="text-white text-2xl font-bold tracking-tight">
                            Cyber_Core
                        </h2>
                    </NavLink>

                    <div className="flex-1 max-w-md mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                value={inputBuscador}
                                onChange={e => onchange(e)}
                                className="w-full rounded-lg bg-purple-800/30 text-black
                                         border border-purple-400/30 backdrop-blur-sm
                                         placeholder-purple-300 outline-none
                                         focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50
                                         transition-all duration-200"
                            />
                            <Search className="absolute right-3 top-2.5 h-5 w-5 text-purple-300" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <NavLink to="/" className={navLinkClass}>
                            <Home size={20} />
                            <span className="hidden md:inline">Inicio</span>
                        </NavLink>

                        <NavLink to="/productos" className={navLinkClass}>
                            <Monitor size={20} />
                            <span className="hidden md:inline">Productos</span>
                        </NavLink>

                        <NavLink to="/versus" className={navLinkClass}>
                            <Cpu size={20} />
                            <span className="hidden md:inline">Versus</span>
                        </NavLink>

                        <NavLink to="/carrito" className={navLinkClass}>
                            <div className="relative">
                                <ShoppingCart size={20} />
                                {cantidadTotal > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white
                                                   rounded-full w-5 h-5 flex items-center justify-center
                                                   text-xs font-bold animate-bounce">
                                        {cantidadTotal}
                                    </span>
                                )}
                            </div>
                            <span className="hidden md:inline">Carrito</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;