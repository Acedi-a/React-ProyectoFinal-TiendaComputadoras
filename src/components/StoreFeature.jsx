// StoreFeature.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StoreFeature = ({ icon, texto }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-purple-100 rounded-full">
                <FontAwesomeIcon
                    icon={icon}
                    className="w-6 h-6 text-purple-600"
                />
            </div>
            <span className="text-sm mt-2">{texto}</span>
        </div>
    )
}

export default StoreFeature;