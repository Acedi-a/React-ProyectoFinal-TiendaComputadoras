import React, { useState } from "react";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useCarrito } from "../context/CarritoContext.jsx";
import {faBoxOpen, faTrash, faTruck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";



const MySwal = withReactContent(Swal);

const FechaEnvio = () => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 3);

    const diasESP = [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ];

    const nombreDia = diasESP[hoy.getDay()];
    const numeroDia = hoy.getDate();

    return `${nombreDia}  ${numeroDia}`;
};

const Carrito = () => {
    const { carrito, eliminarDelCarrito, actualizarCantidad, calcularTotal } = useCarrito();
    const [showConfetti, setShowConfetti] = useState(false);
    const total = calcularTotal();
    const envio = 50;


    let dsTotal = 0;


    carrito.map(item => {
        dsTotal += item.price * (item.disc / 100);
        console.log(item.name +" "+item.price+" "+item.disc)
        //console.log(dsTotal);
    })


    console.log(carrito)

    const realizarPedido = () => {
        const idPedido = uuidv4();
        setShowConfetti(true);
        MySwal.fire({
            title: "¡Pedido realizado!",
            html: `
            <div style="display: flex; align-items: center; justify-content: center; font-size: 2rem; color: #4caf50;">
                <i class="fas fa-truck fa-bounce" style="font-size: 60px; margin-right: 10px; padding: 20px 0;"></i> 
            </div>
            <p>Tu compra se ha procesado exitosamente.</p>
            <p> Tu pedido <strong>${idPedido}</strong> está siendo procesado.</p>
        `,
            confirmButtonText: "¡Entendido!",
            confirmButtonColor: "#4caf50",
        }).then(() => {
            setShowConfetti(false);
        });
    };

    return (
        <div className="px-10 text-center w-auto" style={{marginBottom: "100px"}}>
            {showConfetti && <Confetti />}
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>

            {carrito.length === 0 ? (
                <div style={{ height: "40vh" }}>
                    <h2 className="mb-5">No hay productos en el carrito de compras</h2>
                    <div style={{ marginTop: "50px", transform: "rotate(-180deg)"}}>
                        <FontAwesomeIcon icon={faBoxOpen} bounce style={{color: "#79007b", fontSize: "100px"}} />

                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-7 mx-auto">
                    <div className="cardProductoCarrito col-span-2">
                        {carrito.map((item) => (
                            <div key={item.id} className="grid grid-cols-12 border-b py-5">
                                <div className="h-48 flex items-center justify-center col-span-3">
                                    <img src={item.image} alt={item.name} className="h-full" />
                                </div>
                                <div className="text-start col-span-7 flex flex-col  justify-around gap-2">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p>{item.specs.join(" / ")}</p>
                                    <p>{item.price} Bs.</p>
                                    <span
                                        className="text-sm font-thin w-fit rounded-xl px-4 py-1"
                                        style={{
                                            color: "#0F8E11",
                                            backgroundColor: "#D1FFD8",
                                        }}
                                    >
                                        Recíbelo el {FechaEnvio()}
                                    </span>
                                </div>
                                <div className="flex flex-col items-center gap-2 justify-around col-span-2">
                                    <div className="flex flex-row items-center gap-2">
                                        <button
                                            onClick={() =>
                                                actualizarCantidad(item.id, Math.max(1, item.cantidad - 1))
                                            }
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.cantidad}</span>
                                        <button
                                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => eliminarDelCarrito(item.id)}
                                        className="text-red-500 text-2xl"
                                    >
                                        <FontAwesomeIcon icon={faTrash} style={{ color: "#ff5252" }} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="justify-center flex text-lg font-bold mb-4 col-span-1">
                        <div className="max-w-md fixed st mx-auto p-6 h-fit rounded-lg shadow-[0_0px_30px_-10px_rgba(0,0,0,0.7)]">
                            <h2 className="text-xl font-semibold text-center mb-4">
                                Resumen del pedido
                            </h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Precio de los productos</span>
                                    <span className="font-medium">{total} Bs.</span>
                                </div>
                                <div className="flex justify-between space-x-5">
                                    <span className="text-gray-700">
                                        Gastos de envío <span className="text-gray-500">(Fin de semana)</span>
                                    </span>
                                    <span className="font-medium">{envio} Bs.</span>
                                </div>
                                <div className="flex justify-between space-x-10">
                                    <span className="text-gray-700">
                                        Descuento <span className="text-gray-500">(Variable)</span>
                                    </span>
                                    <span className="font-medium">{dsTotal} Bs.</span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total del pedido</span>
                                    <span>{calcularTotal(dsTotal,envio)} Bs.</span>
                                </div>
                            </div>
                            <button
                                onClick={realizarPedido}
                                className="w-full mt-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
                            >
                                Realizar pedido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrito;
