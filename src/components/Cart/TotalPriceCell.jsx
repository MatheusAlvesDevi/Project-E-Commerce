import { useCartContext } from "../../contexts/CartContext";
import { catalogIndexById } from "../../utils/catalog";

function calculateTotalPrice (cartObject) {
    let price = 0;
    for (const cartItems in cartObject){
        price += catalogIndexById[cartItems].price * cartObject[cartItems]
    }
    return price;
}

const TotalPriceCell = () => {
    const {cartItems} = useCartContext()
    const totalPrice = calculateTotalPrice(cartItems)
    return (
        <section className="flex bg-slate-100 p-1 text-green-700 rounded-md justify-evenly ">
            <p>Total: </p>
            <p>{`$${totalPrice}`}</p>
        </section>
    )
};

export default TotalPriceCell;