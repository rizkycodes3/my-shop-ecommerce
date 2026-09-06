import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";

const Promo = () => {
  const { products } = useContext(ProductContext);
  const productSlice = products.slice(0, 6);

  const spanTitle = "text-[#FE5B00] text-shadow-[2px_2px_0] text-shadow-white text-4xl";

  return (
    <section id="promo" className="bg-l-primary dark:bg-d-primary pt-12 text-l-text-primary dark:text-d-text-primary">
      <div className="bg-linear-to-r from-[#1059AF]/50 to-[#BE96C8]/50 mx-3 px-3 pt-5 pb-10 rounded-sm flex flex-col gap-10 sm:flex-row sm:items-center md:mx-5 lg:justify-around ">
        {/* promo content */}
        <div className="flex flex-col gap-3 sm:w-1/2">
          <h1 className="text-3xl text-d-text-primary font-bold text-shadow-[2px_2px_0] text-shadow-l-accent-warning text-center">
            <span className={spanTitle}>Promo</span> menarik untuk produk terlaris kami <span className={spanTitle}>HINGGA 50%</span>
          </h1>
          <p className="text-l-text-secondary dark:text-d-text-secondary font-semibold text-center">
            Dapatkan produk best-seller pilihan Anda dengan potongan harga hingga <span>50%</span>. Beli sekarang sebelum kehabisan!
          </p>
          <a
            href="#"
            className="bg-l-accent-warning dark:bg-d-accent-warning mx-auto w-fit py-2 px-4 rounded-2xl mt-5 transition-all hover:-translate-y-2 hover:shadow-md shadow-amber-400/50"
          >
            Belanja Sekarang
          </a>
        </div>
        {/* image */}
        <div className="relative ring-4 ring-l-primary h-75 w-75 rounded-full bg-linear-to-r from-[#00d2ff] to-[#3a7bd5]">
          <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-full p-4 flex flex-col font-bold text-center bg-l-secondary text-[#0A2A56]">
            Hemat s.d <span className="text-4xl">50%</span>
          </div>
          <img src={productSlice[0].image} className="w-auto h-30 absolute bottom-8 left-0 -rotate-8" />
          <img src={productSlice[1].image} className="w-auto h-30 absolute top-0 right-0 -scale-x-100" />
          <img src={productSlice[2].image} className="w-auto h-30 absolute top-0 left-0 rotate-8" />
          <img src={productSlice[3].image} className="w-auto h-30 absolute bottom-8 right-0 -rotate-8" />
          <img src={productSlice[4].image} className="w-auto h-25 absolute -top-15 right-1/2 translate-1/2" />
          <img src={productSlice[5].image} className="w-auto h-15 absolute bottom-5 right-1/2 translate-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Promo;
