import {useState, createContext, useContext } from "react";

export const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext) 

export const getAmountCartOfItemsInCart = (cartItemsObject) => {
    let amount = 0;
    for (const productId in cartItemsObject){
        amount += cartItemsObject[productId]
    }
    return amount
};

const CartContextProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
      };
      
      const addToCart = (productId) => {
        const updateCart = {...cartItems, [productId] : (cartItems[productId] ?? 0) + 1}
        setCartItems(updateCart);
      };
    
      const decreaseUnit = (productId) => {
        if (cartItems[productId] > 1){ 
          const updateCart = {...cartItems, [productId] : (cartItems[productId] ?? 0) - 1,}
          setCartItems(updateCart);
        } else {
          removeFromCart(productId)
        };
      };
    
      const removeFromCart = (productId) => {
        const cartItemsCopy = {...cartItems}
        delete cartItemsCopy[productId]
        setCartItems(cartItemsCopy)
      }

    return ( 
    <CartContext.Provider 
    value={
    {
    isCartOpen, 
    cartItems, 
    toggleIsCartOpen, 
    addToCart, 
    decreaseUnit, 
    removeFromCart, 
    }
    }>
    {children}
    </CartContext.Provider>
    )
}

export default CartContextProvider;