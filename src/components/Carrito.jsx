import React, { useState } from "react";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useCarrito } from "../context/CarritoContext.jsx";
import { faBoxOpen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import TarjetaForm from "./TarjetaForm.jsx";

const MySwal = withReactContent(Swal);

const FechaEnvio = () => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 3);

    const diasESP = [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ];

    const nombreDia = diasESP[hoy.getDay()];
    const numeroDia = hoy.getDate();

    return `${nombreDia} ${numeroDia}`;
};

const Carrito = () => {
    const { carrito, eliminarDelCarrito, actualizarCantidad, calcularTotal } = useCarrito();
    const [showConfetti, setShowConfetti] = useState(false);
    const total = calcularTotal();
    const envio = 50;

    let dsTotal = 0;

    carrito.forEach(item => {
        dsTotal += item.price * (item.disc / 100);
    });

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
        <div className="px-4 sm:px-10 w-full max-w-7xl mx-auto">
            {showConfetti && <Confetti />}
            <h2 className="text-2xl font-bold mb-6 text-center">Carrito de Compras</h2>

            {carrito.length === 0 ? (
                <div className="flex flex-col items-center justify-center" style={{ height: "40vh" }}>
                    <h2 className="text-lg mb-4">No hay productos en el carrito de compras</h2>
                    <FontAwesomeIcon icon={faBoxOpen} bounce className="text-purple-600 text-6xl" />
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {carrito.map((item) => (
                            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 border-b py-5">
                                <div className="sm:col-span-3 flex justify-center items-center">
                                    <img src={item.image} alt={item.name} className="h-32 sm:h-48"/>
                                </div>
                                <div className="sm:col-span-6 flex flex-col justify-around space-y-2">
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
                                <div className="sm:col-span-3 flex flex-col items-center space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => actualizarCantidad(item.id, Math.max(1, item.cantidad - 1))}
                                            className="px-3 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.cantidad}</span>
                                        <button
                                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                                            className="px-3 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => eliminarDelCarrito(item.id)}
                                        className="text-red-500 text-2xl"
                                    >
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div >
                        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
                            <h2 className="text-xl font-semibold text-center">Resumen del pedido</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Precio de los productos</span>
                                    <span className="font-medium">{total} Bs.</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Gastos de envío</span>
                                    <span className="font-medium">{envio} Bs.</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-700">Descuento</span>
                                    <span className="font-medium">{dsTotal.toFixed(2)} Bs.</span>
                                </div>
                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total del pedido</span>
                                    <span>{calcularTotal(dsTotal, envio)} Bs.</span>
                                </div>
                            </div>
                            <button
                                onClick={realizarPedido}
                                className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
                            >
                                Realizar pedido
                            </button>
                        </div>
                        <TarjetaForm/>
                        {/*<div>*/}
                        {/*    <div className=" text-gray-300 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-xl grid grid-rows-3 items-start p-2" style={{ width: "100%", height: "200px", fontFamily: "Inconsolata" }}>*/}
                        {/*        <div className="flex justify-between ">*/}
                        {/*            <p>Tarjeta de debito</p>*/}
                        {/*            <img className="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <div className="flex items-center gap-10">*/}
                        {/*            <img className="w-12 ml-5" src="https://cdn-icons-png.flaticon.com/512/9334/9334627.png" alt="credit-chip"/>*/}
                        {/*            <p className="text-xl font-bold">1234 1234 1234 1234</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="">*/}
                        {/*            <div className="flex justify-star items-center ">*/}
                        {/*                <p className="w-10 text-xs">Fecha Exp.</p>*/}
                        {/*                <p className="text-xl">12/24</p>*/}
                        {/*            </div>*/}
                        {/*            <diV>*/}
                        {/*                <p>Daniel Gustavo Jimenez</p>*/}
                        {/*            </diV>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <diV>*/}
                        {/*        <form>*/}
                        {/*            <diV>*/}
                        {/*                <lable>Numero de tarjeta</lable>*/}
                        {/*                <input type="text"/>*/}
                        {/*            </diV>*/}
                        {/*            <diV>*/}
                        {/*                <div>*/}
                        {/*                    <lable>fecha de expiracion</lable>*/}
                        {/*                    <input type="text"/>*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    <label>CVV</label>*/}
                        {/*                    <input type="number"/>*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    <lable>Nombre del propietario</lable>*/}
                        {/*                    <input type="text"/>*/}
                        {/*                </div>*/}

                        {/*            </diV>*/}

                        {/*        </form>*/}
                        {/*    </diV>*/}
                        {/*</div>*/}
                    </div>

                </div>
            )}
        </div>
    );
};

export default Carrito;
