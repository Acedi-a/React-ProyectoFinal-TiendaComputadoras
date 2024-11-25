
const Formulario = ({ actualizarDatos }) => {
    const handleChange = (e) => {
        let { name, value } = e.target;

        if (name === "numeroTarjeta") {
            value = value.replace(/\s+/g, "");

            const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
            value = formattedValue.trim();
        }

        actualizarDatos(name, value);
    };


    return (
        <form className="max-w-md mx-auto space-y-6 mt-6 bg-white p-6 rounded-lg shadow-md">
            <div>
                <label className=" block text-gray-700 font-medium mb-2">Número de Tarjeta</label>
                <input
                    type="text"
                    name="numeroTarjeta"
                    maxLength="16"
                    onChange={e => handleChange(e,true)}
                    placeholder="#### #### #### ####"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Fecha de Expiración</label>
                    <input
                        type="text"
                        name="fechaExpiracion"
                        maxLength="5"
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">CVV</label>
                    <input
                        type="number"
                        name="cvv"
                        maxLength="3"
                        placeholder="***"
                        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                    />
                </div>
            </div>
            <div>
                <label className="block text-gray-700 font-medium mb-2">Nombre del Propietario</label>
                <input
                    type="text"
                    name="nombrePropietario"
                    onChange={handleChange}
                    placeholder="Nombre Apellido"
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-300"
                />
            </div>
        </form>
    );
};

export default Formulario;