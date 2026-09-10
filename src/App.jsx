import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Catalog from "./components/Catalog";
// context
import { ThemeProvider } from "./contexts/ThemeProvider";
import { ProductProvider } from "./contexts/ProductProvider";
// router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Navbar />
        <Routes>
          {/* deklarasi route */}
          <Route path="/" element={<Hero />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
