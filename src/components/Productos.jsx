import { useState, useEffect } from 'react';
import AsideFiltros from "./AsideFiltros.jsx";
import CardProducto from "./CardProducto.jsx";
import ProductosJSON from "../json/Productos.json";

const Productos = () => {
    const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);
    const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
    const [precioMaximo, setPrecioMaximo] = useState(25000);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');
    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const productosPorPagina = 15;

    useEffect(() => {
        setProductos(ProductosJSON);
    }, []);

    const manejarCambioMarca = (marca) => {
        setMarcasSeleccionadas(prevMarcas => {
            if (prevMarcas.includes(marca)) {
                return prevMarcas.filter(m => m !== marca);
            } else {
                return [...prevMarcas, marca];
            }
        });
        setPaginaActual(1);
    };

    const manejarCambioCategoria = (categoria) => {
        setCategoriasSeleccionadas(prevCategorias => {
            if (prevCategorias.includes(categoria)) {
                return prevCategorias.filter(c => c !== categoria);
            } else {
                return [...prevCategorias, categoria];
            }
        });
        setPaginaActual(1);
    };

    const manejarBusqueda = (termino) => {
        setTerminoBusqueda(termino);
        setPaginaActual(1);
    };

    const productosFiltrados = productos.filter(producto => {
        const isMarca = marcasSeleccionadas.length === 0 ||
            marcasSeleccionadas.includes(producto.brand);
        const isPrecio = producto.price <= precioMaximo;
        const isBusqueda = producto.name.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            producto.brand.toLowerCase().includes(terminoBusqueda.toLowerCase());
        const isCategoria = categoriasSeleccionadas.length === 0 ||
            categoriasSeleccionadas.includes(producto.category);
        return isMarca && isPrecio && isBusqueda && isCategoria;
    });

    const indiceUltimoProducto = paginaActual * productosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
    const productosActuales = productosFiltrados.slice(indicePrimerProducto, indiceUltimoProducto);
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

    const generarNumerosPagina = () => {
        const paginas = [];
        for (let i = 1; i <= totalPaginas; i++) {
            if (
                i === 1 ||
                i === totalPaginas ||
                (i >= paginaActual - 2 && i <= paginaActual + 2)
            ) {
                paginas.push(i);
            } else if (i === paginaActual - 3 || i === paginaActual + 3) {
                paginas.push('...');
            }
        }
        return paginas.filter((pagina, indice, array) =>
            array.indexOf(pagina) === indice
        );
    };

    return (
        <div className="max-w-[1920px] mx-auto px-4 lg:px-8" style={{marginTop: "80px"}}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-2 ">
                    <div className="sticky top-24">
                        <AsideFiltros
                            onPriceChange={(precio) => {
                                setPrecioMaximo(precio);
                                setPaginaActual(1);
                            }}
                            onBrandChange={manejarCambioMarca}
                            selectedBrands={marcasSeleccionadas}
                            onSearch={manejarBusqueda}
                            searchTerm={terminoBusqueda}
                            onCategoryChange={manejarCambioCategoria}
                            selectedCategories={categoriasSeleccionadas}
                        />
                    </div>
                </div>

                <div className="lg:col-span-10 ">
                    <div className="mb-4">
                        <p className="text-gray-600">
                            Mostrando {productosActuales.length} de {productosFiltrados.length} productos
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
                        {productosActuales.map((producto) => (
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

                    {totalPaginas > 1 && (
                        <div className="mt-8 flex justify-center gap-2 pb-8">
                            {generarNumerosPagina().map((pagina, indice) => (
                                <button
                                    key={indice}
                                    onClick={() => typeof pagina === 'number' && setPaginaActual(pagina)}
                                    className={`px-3 py-1 rounded ${
                                        pagina === paginaActual
                                            ? 'bg-purple-600 text-white'
                                            : typeof pagina === 'number'
                                                ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                : 'bg-gray-50 text-gray-400 cursor-default'
                                    }`}
                                    disabled={typeof pagina !== 'number'}
                                >
                                    {pagina}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Productos;