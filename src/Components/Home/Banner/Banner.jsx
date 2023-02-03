import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/Banner.css";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import data from "./dataset";
import BannerImage from "./BannerImage";
const Banner = () => {
  return (
    <React.Fragment>
      <div className="banner">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((items, index) => {
            return (
              <SwiperSlide>
                <div className="datas" key={index}>
                  <BannerImage item={items} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default Banner;
