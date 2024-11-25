import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProducto from "./CardProducto.jsx";
import ProductosJSON from "../json/Productos.json";

const Categorico = () => {
    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 15;

    if (categoria === "ofertas") {
        useEffect(() => {
            const filteredProducts = ProductosJSON.filter(producto =>
                producto.discount !== 0
            );
            setProductos(filteredProducts);
        }, [categoria]);
    }
    else if (categoria === "liquidacion"){
        useEffect(() => {
            const filteredProducts = ProductosJSON.filter(producto =>
                producto.discount >= 50
            );
            setProductos(filteredProducts);
        }, [categoria]);
    }
    else{
        useEffect(() => {
            const filteredProducts = ProductosJSON.filter(producto =>
                producto.category === categoria
            );
            setProductos(filteredProducts);
        }, [categoria]);
    }



    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(productos.length / productsPerPage);

    const generatePageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - 2 && i <= currentPage + 2)
            ) {
                pages.push(i);
            } else if (i === currentPage - 3 || i === currentPage + 3) {
                pages.push('...');
            }
        }
        return pages.filter((page, index, array) =>
            array.indexOf(page) === index
        );
    };

    return (
        <div className="max-w-[1920px] mx-auto px-4 my-5 lg:px-8" style={{marginTop: "80px"}}>
            <div className="mb-4">
                <p className="text-gray-600">
                    Mostrando {currentProducts.length} de {productos.length} productos en {categoria}
                </p>
            </div>

            <div className="grid xs:grid-cols-2 md:grid-cols-5 gap-4">
                {currentProducts.map((producto) => (
                    <CardProducto
                        key={producto.id}
                        id={producto.id}
                        name={producto.name}
                        image={producto.image}
                        price={producto.price}
                        rating={producto.rating}
                        specs={producto.specs}
                        disc={producto.discount}
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="mt-8 flex justify-center gap-2 pb-8">
                    {generatePageNumbers().map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && setCurrentPage(page)}
                            className={`px-3 py-1 rounded ${
                                page === currentPage
                                    ? 'bg-purple-600 text-white'
                                    : typeof page === 'number'
                                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        : 'bg-gray-50 text-gray-400 cursor-default'
                            }`}
                            disabled={typeof page !== 'number'}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Categorico;