import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <section className={`swiper h-[calc(100vh-48px)] w-screen mt-12 bg-surface text-text-pri dark:bg-surface-dark dark:text-text-pri-dark`}>
      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000, pauseOnMouseEnter: true }} className="w-full h-full">
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
