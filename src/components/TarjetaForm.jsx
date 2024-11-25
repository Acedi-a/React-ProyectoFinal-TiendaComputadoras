import React, { useState } from "react";
import Tarjeta from "./Tarjeta";
import Formulario from "./Formulario";

const TarjetaForm = () => {
    const [datosTarjeta, setDatosTarjeta] = useState({
        numeroTarjeta: "",
        fechaExpiracion: "",
        nombrePropietario: "",
    });

    const actualizarDatos = (campo, valor) => {
        setDatosTarjeta((prev) => ({ ...prev, [campo]: valor }));
    };

    return (
        <div className="space-y-10">
            <Tarjeta
                numeroTarjeta={datosTarjeta.numeroTarjeta}
                fechaExpiracion={datosTarjeta.fechaExpiracion}
                nombrePropietario={datosTarjeta.nombrePropietario}
            />
            <Formulario actualizarDatos={actualizarDatos} />
        </div>
    );
};

export default TarjetaForm;