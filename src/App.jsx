import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
import CartPage from "./components/CartPage";
import { Toaster } from "sonner";
// router
import { Routes, Route } from "react-router-dom";

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
