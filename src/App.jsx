import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistory/PucharseHistory";
import { Routes, Route } from "react-router-dom";
import { CartContext } from "./contexts/CartContext";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const addToCart = (productId) => {
    const updateCart = {...cartItems, [productId] : (cartItems[productId] ?? 0) + 1}
    setCartItems(updateCart);
  };

  return (
      <CartContext.Provider value={{isCartOpen, toggleIsCartOpen, cartItems, addToCart}}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/history' element={<PurchaseHistory />}/>
        </Routes>
        </ CartContext.Provider>
  );
};
export default App;
