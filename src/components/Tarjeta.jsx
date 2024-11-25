
const Tarjeta = ({ numeroTarjeta, fechaExpiracion, nombrePropietario }) => {
    return (
        <div className="text-gray-300 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-xl p-6 space-y-4 max-w-sm mx-auto">
            <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Tarjeta de Débito</p>
                <img
                    className="w-16"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
                    alt="Visa Logo"
                />
            </div>
            <div className="flex items-center gap-4">
                <img
                    className="w-12"
                    src="https://cdn-icons-png.flaticon.com/512/9334/9334627.png"
                    alt="Chip de Tarjeta"
                />
                <p className="text-2xl font-bold tracking-wider">
                    {numeroTarjeta || "#### #### #### ####"}
                </p>
            </div>
            <div className="flex justify-between text-sm">
                <div>
                    <p className="uppercase text-xs font-light">Fecha Exp.</p>
                    <p className="text-lg">{fechaExpiracion || "MM/YY"}</p>
                </div>
                <div>
                    <p className="uppercase text-xs font-light">Propietario</p>
                    <p className="text-lg">{nombrePropietario || "Nombre Apellido"}</p>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;