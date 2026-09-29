//👇 context
import { useContext, useState } from "react";
import { CartContext, ProductContext } from "../contexts/Context";
//👇 icons
import { MdSearch, MdOutlineAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Catalog = () => {
  //👇 state
  const [whatCategory, setWhatCategory] = useState("");
  const [whatPrice, setWhatPrice] = useState("");
  const [isRating, setIsRating] = useState(false);
  const [whatSearch, setWhatSearch] = useState("");
  //👇 product
  const { cartItems, setCartItems } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const productsFilter = products.filter((pro) => {
    const search = pro.title.toLowerCase().includes(whatSearch.toLowerCase());
    const category = pro.category === whatCategory;
    const price = products.sort((a, b) => {
      if (whatPrice === "tertinggi") {
        return b.price - a.price;
      } else if (whatPrice === "terendah") {
        return a.price - b.price;
      }
    });
    const rating = products.sort((a, b) => {
      if (isRating) {
        return b.rating - a.rating;
      }
    });
    return (whatSearch === "" || search) && (whatCategory === "" || category) && (whatPrice === "" || price) && (!isRating || rating);
  });
  //👇 variable
  const styleSelect = "w-fit p-1 capitalize text-xs bg-l-primary dark:bg-d-primary cursor-pointer";
  //👇 function
  const changeCategory = (e) => setWhatCategory(e.target.value);
  const changePrice = (e) => {
    setIsRating(false);
    return setWhatPrice(e.target.value);
  };
  const changeSearch = (e) => setWhatSearch(e.target.value);
  const changeRating = () => setIsRating(() => (isRating ? false : true));
  const resetFilter = () => {
    setWhatCategory("");
    setWhatPrice("");
    setIsRating(false);
    setWhatSearch("");
  };
  const test = (e) => {
    setCartItems(e.target.parentElement);
    console.log(cartItems);
  };

  return (
    <section className="mt-12 bg-l-primary dark:bg-d-primary text-l-text-primary dark:text-d-text-primary">
      {/*👇 filter */}
      {/* search */}
      <div className="bg-gray-400/50 p-2 flex flex-wrap gap-3">
        <div className="relative w-full">
          <input
            type="search"
            name="search"
            placeholder="Cari Barang..."
            value={whatSearch}
            className="w-full p-1 text-sm rounded-md outline-0 ring-2 ring-l-border-color pr-7 dark:ring-d-border-color"
            onInput={changeSearch}
          />
          <MdSearch className="absolute right-1 top-1/2 -translate-y-1/2" />
        </div>
        {/* sort category */}
        <select name="category" value={whatCategory} onChange={changeCategory} className={styleSelect}>
          <option value="" hidden>
            kategori
          </option>
          {products
            .filter((pro, i, self) => self.findIndex((p) => p.category === pro.category) === i)
            .map((pro) => (
              <option key={pro.id} value={pro.category}>
                {pro.category}
              </option>
            ))}
        </select>
        {/* sort price */}
        <select name="harga" value={whatPrice} onChange={changePrice} className={styleSelect}>
          <option value="" hidden>
            Harga
          </option>
          <option value="tertinggi">Harga Tertinggi</option>
          <option value="terendah">Harga Terendah</option>
        </select>
        {/* sort rating */}
        <button onClick={changeRating} className={`w-fit py-1 px-2 capitalize text-xs cursor-pointer ${isRating ? "bg-d-accent-primary text-d-text-primary" : "bg-l-primary dark:bg-d-primary"}`}>
          Rating
        </button>
        {/* reset */}
        <button onClick={resetFilter} className={styleSelect}>
          Reset
        </button>
      </div>

      {/*👇 catalog items */}
      <ul onClick={test} className="grid grid-cols-2 gap-x-3 gap-y-8 p-3 md:grid-cols-3 lg:grid-cols-4">
        {productsFilter.map((pro) => (
          <li key={pro.id} className="py-5 px-3 pb-15 flex flex-col gap-2 w-fit h-full relative bg-l-secondary dark:bg-d-secondary rounded-md">
            <img src={pro.images[0]} alt="image" className="w-auto h-30 mx-auto" />
            <h2 className="font-semibold font-playfair mt-5 lg:text-lg">{pro.title}</h2>
            <span className="flex gap-1 items-center text-sm bg-l-accent-warning/30 w-fit rounded-sm px-1">
              <FaStar />
              {pro.rating}
            </span>
            <span className="text-lg font-semibold">${pro.price}</span>
            <p className="text-xs/relaxed md:text-sm/relaxed line-clamp-5">{pro.description}</p>
            <button className="bg-l-accent-primary hover:bg-l-accent-hover text-d-text-primary w-fit h-fit flex items-center gap-1 cursor-pointer p-2 rounded-lg text-xs absolute bottom-3">
              <MdOutlineAddShoppingCart /> Masukkan Keranjang
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
