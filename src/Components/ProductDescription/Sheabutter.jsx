import React from "react";
import "./description.css";
import image1 from "../../Assets/Carocel-image/Shea-butter.jpg";
import image2 from "../../Assets/Shea-butter/IMG-20191017-WA0020 (1).jpg";
import image3 from "../../Assets/Shea-butter/IMG-20191017-WA0022 (1).jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

// import required modules
import { Autoplay } from "swiper";

const Sheabutter = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/products", { replace: true });
  };
  return (
    <React.Fragment>
      <div className="description">
        <div className="description__content">
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<BiArrowBack />}
              colorScheme="whatsapp"
              variant="solid"
              onClick={handleClick}
            >
              Back to Shop
            </Button>
          </Stack>
          <div className="description__head">
            <h2>Shea Butter Nuts</h2>
          </div>
          <div className="description__flex">
            <div className="description__image">
              <img src={image1} alt="" />
            </div>
            <div className="description__text">
              <p>
                Shea nuts is a deciduous, small to medium-sized tree growing up
                to a height of 15-25 m. Leaves are caducous and spirally
                arranged, mostly indense clusters at the tips of branches. Fruit
                is a 1 or 2-seeded ellipsoid berry (4-8 cm), weighing 10-50 g,
                initially green but turning yellowish green or brown at maturity
                .
              </p>
              <p>
                Sheanut fruits are a source of energy during the dry season. The
                large fleshy seeds yield about 45% edible lardlike fat, the
                sheanut butter, used for food and cosmetics. A by-product of the
                butter extraction is sheanut cake or meal, which can be used as
                a feedstuff.
              </p>
            </div>
          </div>
          <div className="description__swipper">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              autoplay={{
                delay: 2500,
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
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="doc">
                  <img src={image2} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="doc">
                  <img src={image3} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="doc">
                  <img src={image1} alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <Stack direction="row" spacing={4}>
            <Button
              leftIcon={<BiArrowBack />}
              colorScheme="whatsapp"
              variant="solid"
              onClick={handleClick}
            >
              Back to Shop
            </Button>
          </Stack>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sheabutter;
