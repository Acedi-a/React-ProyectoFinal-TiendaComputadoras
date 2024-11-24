import styled from "styled-components";

const Imagen = styled.img`
    width: 100px;
    height: 100px;

    @keyframes girar {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    animation: girar 5s linear infinite;
`;


const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-purple-700">En Desarrollo 🚧</h1>
                <p className="text-gray-600 mt-4 text-lg">
                    Estamos trabajando en esta página. ¡Pronto estará lista!
                </p>
                <Imagen
                    src="https://cdn-icons-png.freepik.com/256/889/889744.png?semt=ais_hybrid"
                    alt="En Desarrollo"
                    className="w-64 h-64 mx-auto mt-6 object-contain"
                />
                <button
                    className="mt-8 px-6 py-2 text-white bg-purple-700 rounded-lg shadow-md hover:bg-purple-800"
                    onClick={() => window.history.back()}
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default Error404;
