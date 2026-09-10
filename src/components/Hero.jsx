// component
import ProductPreview from "./ProductPreview";
import Promo from "./Promo";
import Footer from "./Footer";
// slide
import Slide1 from "./slideHero/Slide1";
import Slide2 from "./slideHero/Slide2";
import Slide3 from "./slideHero/Slide3";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <main className="overflow-x-hidden">
      <section className={`swiper h-[calc(100vh-48px)] w-auto mt-12 bg-l-primary text-l-text-primary dark:bg-d-primary dark:text-d-text-primary`}>
        <Swiper modules={[Autoplay]} loop={true} autoplay={{ delay: 3000, pauseOnMouseEnter: true }} slidesPerView={1} className="w-full h-full">
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>
        </Swiper>
      </section>
      <ProductPreview />
      <Promo />
      <Footer />
    </main>
  );
};

export default Hero;
