import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  return (
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
  );
};

export default Hero;
