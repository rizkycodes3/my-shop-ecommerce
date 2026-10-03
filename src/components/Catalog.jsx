//👇 context && reducer
import { useContext, useState } from "react";
import { ProductContext, CartContext } from "../contexts/Context";

//👇 icons
import { MdSearch, MdOutlineAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const Catalog = () => {
  //👇 state
  const [whatFilter, setWhatFilter] = useState({
    category: "",
    price: "",
    rating: false,
    search: "",
  });

  //👇 product
  const { products } = useContext(ProductContext);
  const { cartDispatch } = useContext(CartContext);
  const productFilter = products.filter((pro) => {
    const search = pro.title.toLowerCase().includes(whatFilter.search.toLowerCase());
    const category = whatFilter.category === "" || pro.category === whatFilter.category;
    return search && category;
  });
  if (whatFilter.price === "tertinggi") {
    productFilter.sort((a, b) => b.price - a.price);
  } else if (whatFilter.price === "terendah") {
    productFilter.sort((a, b) => a.price - b.price);
  }
  if (whatFilter.rating) {
    productFilter.sort((a, b) => b.rating - a.rating);
  }
  const uniqueCategories = [...new Set(products.map((product) => product.category))];

  //👇 variable tailwind
  const styleSelect = "w-fit p-1 capitalize text-xs bg-l-primary dark:bg-d-primary cursor-pointer";

  //👇 function
  const changeCategory = (e) => setWhatFilter({ ...whatFilter, category: e.target.value });
  const changePrice = (e) => setWhatFilter({ ...whatFilter, rating: false, price: e.target.value });
  const changeSearch = (e) => setWhatFilter({ ...whatFilter, search: e.target.value });
  const changeRating = () => setWhatFilter({ ...whatFilter, rating: !whatFilter.rating });
  const resetFilter = () => {
    setWhatFilter({
      category: "",
      price: "",
      rating: false,
      search: "",
    });
  };

  return (
    <section className="mt-12 bg-l-primary dark:bg-d-primary text-l-text-primary dark:text-d-text-primary">
      {/*👇 filter */}
      <div className="bg-gray-400/50 p-2 flex flex-wrap gap-3">
        <div className="relative w-full">
          <input
            type="search"
            name="search"
            placeholder="Cari Barang..."
            value={whatFilter.search}
            className="w-full p-1 text-sm rounded-md outline-0 ring-2 ring-l-border-color pr-7 dark:ring-d-border-color"
            onInput={changeSearch}
          />
          <MdSearch className="absolute right-1 top-1/2 -translate-y-1/2" />
        </div>

        <select name="category" value={whatFilter.category} onChange={changeCategory} className={styleSelect}>
          <option value="" hidden>
            kategori
          </option>
          {uniqueCategories.map((pro, i) => (
            <option key={i} value={pro}>
              {pro}
            </option>
          ))}
        </select>

        <select name="harga" value={whatFilter.price} onChange={changePrice} className={styleSelect}>
          <option value="" hidden>
            Harga
          </option>
          <option value="tertinggi">Harga Tertinggi</option>
          <option value="terendah">Harga Terendah</option>
        </select>

        <button
          onClick={changeRating}
          className={`w-fit py-1 px-2 capitalize text-xs cursor-pointer ${whatFilter.rating ? "bg-d-accent-primary text-d-text-primary" : "bg-l-primary dark:bg-d-primary"}`}
        >
          Rating
        </button>

        <button onClick={resetFilter} className={styleSelect}>
          Reset
        </button>
      </div>

      {/*👇 catalog items */}
      <ul className="grid grid-cols-2 gap-x-3 gap-y-8 p-3 md:grid-cols-3 lg:grid-cols-4">
        {productFilter.map((pro) => (
          <li key={pro.id} className="py-5 px-3 pb-15 flex flex-col gap-2 w-fit h-full relative bg-l-secondary dark:bg-d-secondary rounded-md">
            <img src={pro.images[0]} alt="image" className="w-auto h-30 mx-auto" />
            <h2 className="font-semibold font-playfair mt-5 lg:text-lg">{pro.title}</h2>
            <span className="flex gap-1 items-center text-sm bg-l-accent-warning/30 w-fit rounded-sm px-1">
              <FaStar />
              {pro.rating}
            </span>
            <span className="text-lg font-semibold">${pro.price}</span>
            <p className="text-xs/relaxed md:text-sm/relaxed line-clamp-5">{pro.description}</p>
            <button
              onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: pro })}
              className="bg-l-accent-primary hover:bg-l-accent-hover text-d-text-primary w-fit h-fit flex items-center gap-1 cursor-pointer p-2 rounded-lg text-xs absolute bottom-3"
            >
              <MdOutlineAddShoppingCart /> Masukkan Keranjang
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
