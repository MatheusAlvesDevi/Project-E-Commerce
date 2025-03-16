import CartItem from "./CartItem";

const CartProduct = () => {
    return ( 
        <section className="flex fle-col justify-start overflow-auto gap-2">
            <CartItem />
        </section>
    );
};

export default CartProduct;