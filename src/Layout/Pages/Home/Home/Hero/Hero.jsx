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
          <img
            src="/images/sameb2.png"
            className="w-full  object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sameb1.png"
            className="w-full  object-cover"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/sameb3.png"
            className="w-full  object-cover"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
