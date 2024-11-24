import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import StarRating from "./Rating.jsx";



const CardReview = ({ name, date, rating, avatar, title, desc }) => {
    return (
        <div className="max-w-xs bg-white rounded-lg p-6 flex flex-col space-y-4">
            <div className="flex justify-start">
                <StarRating totalStars={5} rating={rating} />
            </div>

            <div>
                <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>

            <div className="flex items-center space-x-4">
                <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <div>
                    <p className="text-md font-medium text-gray-800">{name}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>
        </div>
    );
};


export default CardReview;