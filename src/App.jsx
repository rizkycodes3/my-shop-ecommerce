import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import ProductPreview from "./components/ProductPreview";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
// context
import { ThemeProvider } from "./contexts/ThemeProvider";
import { ProductProvider } from "./contexts/ProductProvider";

const App = () => {
  return (
    <ThemeProvider>
      <ProductProvider>
        <Navbar />
        <Hero />
        <ProductPreview />
        <Promo />
        <Footer />
      </ProductProvider>
    </ThemeProvider>
  );
};

export default App;
