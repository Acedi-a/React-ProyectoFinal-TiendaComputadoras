import { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext(undefined);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item.id === producto.id);

            if (productoExistente) {
                return prevCarrito.map(item =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            }
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };

    const eliminarDelCarrito = (productoId) => {
        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productoId));
    };

    const actualizarCantidad = (productoId, nuevaCantidad) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item.id === productoId
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            )
        );
    };

    const calcularTotal = (descuento = 0, agregado = 0) => {
        let precio = carrito.reduce((total, item) => total + (item.price * item.cantidad), 0);
        precio -= descuento;
        precio += agregado;
        return precio.toFixed(2);
    };

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarAlCarrito,
            eliminarDelCarrito,
            actualizarCantidad,
            calcularTotal
        }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
    }
    return context;
};
