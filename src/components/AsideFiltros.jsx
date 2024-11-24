import {useState} from "react";


const AsideFiltros = ({
                          onPriceChange,
                          onBrandChange,
                          selectedBrands,
                          onSearch,
                          searchTerm,
                          onCategoryChange,
                          selectedCategories
                      }) => {
    const Marcas = ['Acer', 'MSI', 'Asus', 'Samsung', 'Apple', 'Dell', 'AMD', 'Intel', 'Nvidia', 'LG'];
    const Categorias = ['Monitor', 'Laptop', 'Procesador', 'Tarjeta Gráfica', 'Memoria RAM', 'Almacenamiento', 'Periféricos'];

    const [Rprecio, setRpprecio] = useState(0);
    const HandelRangoPrecio = (e) => {
        e.preventDefault();
        setRpprecio(e.target.value);
        onPriceChange(Number(e.target.value))
    }

    return (
        <aside className="w-64 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Filtros de búsqueda</h2>

            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full py-2 px-6 bg-gray-100 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <svg
                        className="w-5 h-5 absolute right-2 top-2.5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-medium mb-2">Categorías</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {Categorias.map((categoria) => (
                        <label key={categoria} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                                onChange={() => onCategoryChange(categoria)}
                                checked={selectedCategories.includes(categoria)}
                            />
                            <span className="ml-2 text-gray-700">{categoria}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-medium mb-2">Precio menor a {Rprecio}</h3>
                <input
                    type="range"
                    min="0"
                    max="25000"
                    value={Rprecio}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    onChange={HandelRangoPrecio}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>0 Bs.</span>
                    <span>25.000 Bs.</span>
                </div>
            </div>

            <div>
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Marcas</h3>
                    {selectedBrands.length > 0 && (
                        <button
                            onClick={() => {
                                Marcas.forEach(brand => {
                                    if (selectedBrands.includes(brand)) {
                                        onBrandChange(brand);
                                    }
                                });
                            }}
                            className="text-sm text-purple-600 hover:text-purple-700"
                        >
                            Limpiar filtros
                        </button>
                    )}
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {Marcas.map((marca) => (
                        <label key={marca} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                                onChange={() => onBrandChange(marca)}
                                checked={selectedBrands.includes(marca)}
                            />
                            <span className="ml-2 text-gray-700">{marca}</span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default AsideFiltros;