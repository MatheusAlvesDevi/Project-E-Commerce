import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const UserBotton = () => {
    return (
        <div>
                <button className="px-2">
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
                <a>
                    <FontAwesomeIcon className="px-2" icon={faUser} />
                </a>
        </div>
    );
}

export default UserBotton;