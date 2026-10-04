import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import CartPage from "./components/CartPage";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Toaster richColors />
    </>
  );
};

export default App;
