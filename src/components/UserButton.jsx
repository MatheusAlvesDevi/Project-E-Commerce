import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserBotton = () => {
    return (
        <div>
                <button className="px-2 relative">
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
                <div id="cart-amount" className="absolute inline-flex items-center justify-center w-6 h-6 font-bold text-white bg-red-500 border-white rounded-full top-10 right-20">
                    3
                </div>
                <Link to='/history'>
                    <FontAwesomeIcon className="px-2" icon={faUser} />
                </Link>
        </div>
    );
}

export default UserBotton;