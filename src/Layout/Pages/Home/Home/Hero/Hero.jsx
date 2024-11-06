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
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co.com/NjMhFsR/new7.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
