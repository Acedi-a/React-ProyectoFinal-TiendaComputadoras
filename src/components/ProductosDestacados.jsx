import CardProducto from "./CardProducto.jsx";
import ProductosJSON from "../json/Productos.json"


const ProductosDestacados = () => {



    const productosCategoricos = {};

    ProductosJSON.forEach(producto => {
        if (!productosCategoricos[producto.category]) productosCategoricos[producto.category] = [];

        if (productosCategoricos[producto.category].length < 6) productosCategoricos[producto.category].push(producto);
    });

    console.log(productosCategoricos);

    const productosDestacados = Object.values(productosCategoricos).flat();
    console.log(productosDestacados);



    return (
        <div className="w-full h-full flex flex-col p-1 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-5">
                {productosDestacados.map((producto, index) => (

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
        </div>
    )
}

export default ProductosDestacados;