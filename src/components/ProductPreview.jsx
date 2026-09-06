import { useContext } from "react";
import { ProductContext } from "../contexts/ProductProvider";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// logo
import { FaStar, FaArrowRight } from "react-icons/fa6";

const ProductPreview = () => {
  const { products } = useContext(ProductContext);
  const productsSlice = products.slice(0, 5);

  return (
    <section id="product" className="pt-12 bg-l-primary dark:bg-d-primary text-l-text-primary dark:text-d-text-primary">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="bg-l-secondary dark:bg-d-secondary mx-3! px-3! rounded-md md:mx-5! md:px-5!"
      >
        {productsSlice.map((pro) => (
          <SwiperSlide key={pro.id} className="swiper-slide py-5 flex! flex-col gap-2">
            <img src={pro.image} alt={pro.title} className="w-auto h-60 mx-auto" />
            <h2 className="text-2xl font-semibold font-playfair mt-5">{pro.title}</h2>
            <span className="flex gap-1 items-center bg-l-accent-warning/30 w-fit rounded-sm px-1">
              <FaStar className="text-xs" />
              {pro.rating.rate}
            </span>
            <span>${pro.price}</span>
            <span>{pro.category}</span>
            <p className="text-l-text-secondary dark:text-d-text-secondary">{pro.description}</p>
          </SwiperSlide>
        ))}

        <a href="#" className="flex items-center gap-1 pb-5 hover:underline">
          Lihat Semua Product
          <FaArrowRight className="text-sm" />
        </a>
      </Swiper>
    </section>
  );
};

export default ProductPreview;
