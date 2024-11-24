import { NavLink } from "react-router-dom";

const CardCategoria = ({ name, img, url }) => {
    return (
        <div className="w-64 h-64 flex flex-col justify-center items-center text-center">
            <NavLink to={`/categorico/${url}`}>
                <div className="mt-2 rounded-full w-48 h-48 bg-gradient-to-br from-purple-800 to-pink-500 flex justify-center items-center">
                    <img
                        src={img}
                        alt={name}
                        className="w-32 h-32 object-contain"
                    />
                </div>
                <p className="text-black text-lg mt-2">{name}</p>
            </NavLink>
        </div>
    );
};

export default CardCategoria;
