import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
