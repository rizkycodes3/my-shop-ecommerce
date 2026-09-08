import { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { FcShop } from "react-icons/fc";
import { MdSearch, MdOutlineShoppingCart, MdMenu, MdOutlineCancel } from "react-icons/md";
import LightMode from "../assets/light-mode.png";
import DarkMode from "../assets/dark-mode.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-l-secondary p-2 grid grid-cols-2 gap-4 font-inter ${isOpen ? "grid-rows-[minmax(0,1fr),1fr]" : "grid-rows-1"} fixed top-0 right-0 left-0 z-10 dark:bg-d-secondary dark:text-d-text-primary md:px-10`}
    >
      {/* main navbar */}
      <div className="flex items-center gap-2 ">
        <FcShop className="text-3xl" />
        <h1 className="text-2xl font-bold">My Shop</h1>
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
        <MdOutlineShoppingCart className="cursor-pointer" />
        {isOpen ? (
          <MdOutlineCancel onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <MdMenu onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* hidden navbar */}
      <div className={`row-[2/3] col-span-full ${isOpen ? "flex" : "hidden"} flex-col gap-2`}>
        <div className="relative">
          <input
            type="search"
            name="search"
            placeholder="Search Items..."
            className="w-full p-1 rounded-md outline-0 ring-2 ring-l-border-color pr-7 dark:ring-d-border-color"
          />
          <MdSearch className="absolute right-1 top-1/2 -translate-y-1/2 text-xl" />
        </div>
        <a href="#" className="hover:underline w-fit">
          Home
        </a>
        <a href="#product" className="hover:underline w-fit">
          Catalog Product
        </a>
        <a href="#promo" className="hover:underline w-fit">
          Promo
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
