import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { ThemeProvider } from "./contexts/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Product />
    </ThemeProvider>
  );
};

export default App;
