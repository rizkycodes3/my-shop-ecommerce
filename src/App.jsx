import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
    </ThemeProvider>
  );
};

export default App;
