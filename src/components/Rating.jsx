import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ totalStars, rating }) => {
    return (
        <div>
            {Array.from({ length: totalStars }).map((_, index) => (
                <span key={index}>
                    <FontAwesomeIcon
                        icon={faStar}
                        className={index < Math.floor(rating) ? "text-yellow-500" : "text-gray-400"}
                    />
                </span>
            ))}
        </div>
    );
};

export default StarRating;