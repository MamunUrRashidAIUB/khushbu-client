import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="pl-16 p-2">
      {" "}
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper ">
        <SwiperSlide>
          <img src="/images/hero-banner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hero-banner2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hero-banner3.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
