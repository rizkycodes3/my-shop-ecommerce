import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import CartPage from "./components/CartPage";
// context
import ThemeProvider from "./contexts/ThemeProvider";
import ProductProvider from "./contexts/ProductProvider";
import CartProvider from "./contexts/CartProvider";
// router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
