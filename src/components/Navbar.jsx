//👇 context
import { useContext, useState } from "react";
import { ThemeContext, CartContext } from "../contexts/Context";
//👇 icons
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart, MdMenu, MdOutlineCancel } from "react-icons/md";
//👇 image
import LightMode from "../assets/light-mode.png";
import DarkMode from "../assets/dark-mode.png";
//👇 route
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartState } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className={`bg-l-secondary p-2 grid grid-cols-2 gap-4 font-inter ${isOpen ? "grid-rows-[minmax(0,1fr),1fr]" : "grid-rows-1"} fixed top-0 right-0 left-0 z-10 w-screen dark:bg-d-secondary dark:text-d-text-primary md:px-10`}
    >
      {/* main navbar */}
      <div onClick={() => navigate("/")} className="flex items-center gap-2">
        <FcShop className="text-3xl" />
        <h1 className="text-2xl font-bold font-playfair">My Shop</h1>
      </div>

      <div className="flex items-center justify-end gap-2 text-2xl sm:gap-5">
        <div className="relative">
          <img
            src={LightMode}
            alt="light mode"
            onClick={toggleTheme}
            className={`w-12 cursor-pointer drop-shadow-2xl transition-all duration-300 absolute z-10 ${theme === "light" ? "opacity-100" : "opacity-0"}`}
          />
          <img src={DarkMode} alt="dark mode" className="w-12 cursor-pointer drop-shadow-2xl transition-all duration-300" />
        </div>

        <div className="relative">
          <MdOutlineShoppingCart onClick={() => navigate("/cart")} className="cursor-pointer" />
          <span className="absolute -top-1 right-0 text-[10px] bg-yellow-200 text-black rounded-full px-1">{cartState.cart.length ? cartState.cart.length : ""}</span>
        </div>

        {isOpen ? <MdOutlineCancel onClick={() => setIsOpen(false)} className="cursor-pointer" /> : <MdMenu onClick={() => setIsOpen(true)} className="cursor-pointer" />}
      </div>

      {/* hidden navbar */}
      <div className={`row-[2/3] col-span-full ${isOpen ? "flex" : "hidden"} flex-col gap-2`}>
        <Link onClick={() => setIsOpen(false)} to="/" className="hover:underline w-fit">
          Home
        </Link>
        <Link onClick={() => setIsOpen(false)} to="catalog" className="hover:underline w-fit">
          Catalog Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
