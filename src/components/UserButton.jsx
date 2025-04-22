import { useCartContext, getAmountCartOfItemsInCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserBotton = () => {
    const {toggleIsCartOpen, cartItems} = useCartContext();
    
    const amountOfItems = getAmountCartOfItemsInCart(cartItems);
    return (
        <div>
                <button className="px-2 relative" onClick={toggleIsCartOpen}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </button>
                {!!amountOfItems && (
                <div id="cart-amount" className="absolute inline-flex items-center justify-center w-5 h-5 font-bold text-white bg-red-500 border-white rounded-full top-13.5 right-20">
                {amountOfItems}
                </div>
                )}
                <Link to='/history'>
                    <FontAwesomeIcon className="px-2" icon={faUser} />
                </Link>
        </div>
    );
}

export default UserBotton;