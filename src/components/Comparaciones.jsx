import { useState } from "react";
import ProductosJSON from "../json/Productos.json";
import CardProductoVersus from "./CardProductoVersus.jsx";
import {ArrowDown, ArrowLeft, ArrowRight} from 'lucide-react';

const Comparaciones = () => {
    const Categorias = [...new Set(ProductosJSON.map((producto) => producto.category))];
    const ProductosCategorizados = {};

    ProductosJSON.forEach((producto) => {
        if (!ProductosCategorizados[producto.category]) {
            ProductosCategorizados[producto.category] = [];
        }
        ProductosCategorizados[producto.category].push(producto);
    });

    const [categoriaSelcionada, setCategoriaSeleccionada] = useState("");
    const [producto1, setProducto1] = useState(0);
    const [producto2, setProducto2] = useState(0);
    const [datosProducto1, setDatosProducto1] = useState({});
    const [datosProducto2, setDatosProducto2] = useState({});

    const Seleccionado = (e) => {
        e.preventDefault();
        setCategoriaSeleccionada(e.target.value);
        setProducto1(0);
        setProducto2(0);
    };

    const ProductoSeleccionado = (e, pr, dp) => {
        e.preventDefault();
        pr(e.target.value);
        let productoSeleccionado = ProductosJSON.find(
            (producto) => producto.id === Number(e.target.value)
        );
        dp(productoSeleccionado);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Comparador de Tecnología
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Compara las características y especificaciones de diferentes productos para tomar la mejor decisión
                    </p>
                </div>

                <div className="max-w-xl mx-auto mb-12">
                    <div className="relative">
                        <select
                            className="w-full rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-4 px-6 bg-white text-lg appearance-none cursor-pointer"
                            value={categoriaSelcionada}
                            onChange={Seleccionado}
                        >
                            <option value="">Selecciona una categoría</option>
                            {Categorias.map((categoria) => (
                                <option key={categoria} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>

                {categoriaSelcionada ? (
                    <div className="space-y-8">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 space-x-2 items-start relative">
                            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-6 shadow-lg">
                                <div className="flex items-center gap-4 text-2xl font-bold text-blue-600">
                                    <ArrowLeft className="w-6 h-6" />
                                    <span>VS</span>
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="relative rounded-2xl shadow-[10px_0px_15px_5px_rgba(0,0,255,0.3)] p-1 ">
                                <select
                                    className="w-full mb-6 rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white appearance-none"
                                    value={producto1}
                                    onChange={(e) => ProductoSeleccionado(e, setProducto1, setDatosProducto1)}
                                >
                                    <option value={ProductosCategorizados[categoriaSelcionada][0].id}>Selecciona el primer producto</option>
                                    {ProductosCategorizados[categoriaSelcionada]?.map((producto) => (
                                        <option key={producto.id} value={producto.id}>
                                            {producto.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="transform transition-all duration-300 hover:scale-105">
                                    <CardProductoVersus producto={datosProducto1} specs={datosProducto1.specs} />
                                </div>
                            </div>

                            <div className="relative rounded-2xl shadow-[-10px_0px_15px_5px_rgba(255,0,0,0.3)] p-1">
                                <select
                                    className="w-full mb-6 rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 py-3 px-4 bg-white appearance-none"
                                    value={producto2}
                                    onChange={(e) => ProductoSeleccionado(e, setProducto2, setDatosProducto2)}
                                >
                                    <option value={ProductosCategorizados[categoriaSelcionada][0].id}>Selecciona el segundo producto</option>
                                    {ProductosCategorizados[categoriaSelcionada]?.map((producto) => (
                                        <option key={producto.id} value={producto.id}>
                                            {producto.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="transform transition-all duration-300 hover:scale-105">
                                    <CardProductoVersus producto={datosProducto2} specs={datosProducto2.specs} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="rounded-xl bg-white p-12 shadow-sm border-2 border-dashed border-gray-200">
                            <p className="text-gray-500 text-lg">
                                Selecciona una categoría para comenzar la comparación
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comparaciones;