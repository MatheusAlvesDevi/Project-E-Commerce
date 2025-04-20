import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Checkout from "./pages/CheckoutPage/Checkout";
import PurchaseHistory from "./pages/PurchaseHistory/PucharseHistory";
import { Routes, Route } from "react-router-dom";
import CartContextProvider, { CartContext } from "./contexts/CartContext";

function App() {

  return (
      <CartContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/history' element={<PurchaseHistory />}/>
        </Routes>
      </ CartContextProvider>
  );
};
export default App;
