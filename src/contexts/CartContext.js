import { createContext } from "react";

export const CartContext = createContext(null);

export const getAmountCartOfItemsInCart = (cartItemsObject) => {
    let amount = 0;
    for (const productId in cartItemsObject){
        amount += cartItemsObject[productId]
    }
    return amount
};